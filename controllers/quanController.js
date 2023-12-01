const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/response');
const { Op } = require("sequelize");

function validateObj(obj) {
    Object.keys(obj).forEach(function(key) {
        var value = obj[key];
        if (value === "" || value === "null") {
            obj[key] = null;
        }else {
            try {
              obj[key] = JSON.parse(value);
            } catch (error) {
              obj[key] = value;
            }
          }
      });
    return obj;
}

const getAllAdsLoc = async(req, res) =>{
    try{
        const [data, metadata] = await sequelize.query
        (`SELECT al.id_ads_location, al.address, al.longitude, al.latitude, 
        w.ward, d.district
        FROM Ads_location al
        INNER JOIN Ward w ON al.id_ward = w.id_ward
        INNER JOIN District d ON al.id_district = d.id_district
        WHERE al.is_zoning = 1`);

        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

const getInfo = async(req, res) =>{
    try{
        let { email } = req.params;
        let check_district = await model.CanboQuan.findOne({
            where:{
                email
            }
        });
        if(check_district){
            let data = await model.CanboQuan.findOne({
                where:{
                    email
                }
            });
            data.password = "********"
            sucessCode(res,data,"Get thành công")
        }
        else{
            failCode(res,"","Cán bộ quận không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getWard = async(req, res) =>{
    try{
        let { id_district } = req.params;

        let data = await model.Ward.findAll({
            where:{
                id_district
            }
        });
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

const getMapInfo = async(req, res) =>{
    let {id_district} = req.params
    try{
        const [adsloc, metadata1] = await sequelize.query
            (`SELECT al.id_ads_location, al.address, w.*, d.*, lt.loc_type, at.ads_type, al.is_zoning, 
            al.photo, al.longitude, al.latitude
            FROM Ads_location al
            INNER JOIN Ward w ON al.id_ward = w.id_ward
            INNER JOIN District d ON w.id_district = d.id_district
            INNER JOIN Location_type lt ON lt.id_loc_type = al.id_loc_type 
            INNER JOIN Ads_type at ON at.id_ads_type = al.id_ads_type
            WHERE al.id_district = ${id_district}`);

        const [ads, metadata2] = await sequelize.query
            (`SELECT a.*, bt.board_type
            FROM Ads a
            INNER JOIN Board_type bt ON bt.id_board_type = a.id_board_type
            INNER JOIN Ads_location al ON al.id_ads_location = a.id_ads_location
            WHERE al.id_district = ${id_district}`);

        for (let i = 0; i < ads.length; i++) {
            const [ads_report, metadata3] = await sequelize.query
                (`SELECT ar.*, rt.report_type
                FROM Ads_report ar
                INNER JOIN Report_type rt ON rt.id_report_type = ar.id_report_type
                WHERE ar.id_ads = ${ads[i].id_ads}`);  
            if (ads_report.length == 0)
                ads[i] = {...ads[i], list_report: null}
            else
                ads[i] = {...ads[i], list_report: ads_report}          
        }

        for (let i = 0; i < adsloc.length; i++) {

            const [adsloc_report, metadata4] = await sequelize.query
            (`SELECT ar.*, rt.report_type
            FROM Ads_loc_report ar
            INNER JOIN Report_type rt ON rt.id_report_type = ar.id_report_type
            WHERE ar.id_ads_location = ${adsloc[i].id_ads_location}`);
                
            let list_ads = []
            for (let j = 0; j < ads.length; j++) {
                if (ads[j].id_ads_location == adsloc[i].id_ads_location){
                    list_ads.push(ads[j])
                }
            }

            if (adsloc_report.length == 0 && list_ads.length > 0)
                adsloc[i] = {...adsloc[i], list_report: null, list_ads: list_ads}
            else if (adsloc_report.length > 0 && list_ads.length == 0)
                adsloc[i] = {...adsloc[i], list_report: adsloc_report, list_ads: null}
            else if (adsloc_report.length == 0 && list_ads.length == 0)
                adsloc[i] = {...adsloc[i], list_report: null, list_ads: null}
            else 
                adsloc[i] = {...adsloc[i], list_report: adsloc_report, list_ads: list_ads}

        }    

        sucessCode(res,adsloc,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getAdsLocation = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
            (`SELECT al.id_ads_location, al.address, w.ward, d.district, lt.loc_type, at.ads_type, al.is_zoning, 
            al.photo, al.longitude, al.latitude, COUNT(a.id_ads) as hasAds, COUNT(alr.id_report) as hasReport
            FROM Ads_location al
            INNER JOIN Ward w ON al.id_ward = w.id_ward
            INNER JOIN District d ON d.id_district = w.id_district
            INNER JOIN Location_type lt ON lt.id_loc_type = al.id_loc_type 
            INNER JOIN Ads_type at ON at.id_ads_type = al.id_ads_type
            LEFT JOIN Ads a ON a.id_ads_location = al.id_ads_location
            LEFT JOIN Ads_loc_report alr ON alr.id_ads_location = al.id_ads_location
            WHERE al.id_district = ${id_district}
            GROUP BY al.id_ads_location, al.address, w.ward, lt.loc_type, at.ads_type, al.is_zoning, 
            al.photo, al.longitude, al.latitude
            ORDER BY al.id_ads_location`);
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getAds = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
            (`SELECT a.*, al.address, al.longitude, al.latitude, w.ward, l.loc_type, b.board_type
            FROM Ads a
            INNER JOIN Board_type b ON a.id_board_type = b.id_board_type
            INNER JOIN Ads_location al ON a.id_ads_location = al.id_ads_location AND al.id_district = ${id_district}
            INNER JOIN Ward w ON w.id_ward = al.id_ward
            INNER JOIN Location_type l ON al.id_loc_type = l.id_loc_type`);

        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getAdsLocReport = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
            (`SELECT alr.*, rt.report_type, w.ward
            FROM Ads_loc_report alr
            INNER JOIN Report_type rt ON rt.id_report_type = alr.id_report_type
            INNER JOIN Ads_location al ON al.id_ads_location = alr.id_ads_location
            INNER JOIN Ward w ON w.id_ward = al.id_ward
            WHERE al.id_district = ${id_district}
            `);
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getAdsReport = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
            (`SELECT ar.*, rt.report_type, w.ward
            FROM Ads_report ar
            INNER JOIN Report_type rt ON rt.id_report_type = ar.id_report_type
            INNER JOIN Ads a ON a.id_ads = ar.id_ads
            INNER JOIN Ads_location al ON al.id_ads_location = a.id_ads_location
            INNER JOIN Ward w ON w.id_ward = al.id_ward
            WHERE al.id_district = ${id_district}`);
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const getLocReport = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
            (`SELECT lr.*, rt.report_type, w.ward
            FROM Location_report lr
            INNER JOIN Report_type rt ON rt.id_report_type = lr.id_report_type
            INNER JOIN Ward w ON w.id_ward = lr.id_ward
            WHERE w.id_district = ${id_district}`);
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}  

const getAdsCreate = async(req, res) =>{
    try{
        let { id_district } = req.params;

        const [data, metadata] = await sequelize.query
        (`SELECT ac.*, bt.board_type, w.ward, al.address
        FROM Ads_create ac
        INNER JOIN Board_type bt ON bt.id_board_type = ac.id_board_type
        INNER JOIN Ads_location al ON al.id_ads_location = ac.id_ads_location
        INNER JOIN Ward w ON w.id_ward = al.id_ward
        WHERE al.id_district = ${id_district}`);
        
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

const updateInfo = async(req, res) =>{
    try{
        let { id_district } = req.params;
        sucessCode(res,req.body,"Get thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

const updatePassword = async(req, res) =>{
    try{
        let { id_district } = req.params;
        sucessCode(res,req.body,"Get thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const forgetPassword = async(req, res) =>{
    try{
        let { id_district } = req.params;
        sucessCode(res,req.body,"Get thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const updateAdsLoc = async(req, res) =>{
    try{
        let { email } = req.params;
        const file = req.file;
        const obj = validateObj(req.body)

        let { id_ads_location, latitude, longitude, address, ward, district, 
            id_loc_type, id_ads_type, is_zoning, req_time, reason, office} = obj

       
        let findDistrict = await model.District.findOne({where:{district: district}})
        let findWard = await model.Ward.findOne({where:{
            ward: ward,
            id_district: findDistrict.id_district
        }})

        const data = await model.Ads_loc_update.create({
            id_ads_location, latitude, longitude, address, 
            id_loc_type, id_ads_type, is_zoning, req_time, reason, office,
            id_ward: findWard.id_ward, 
            id_district: findWard.id_district, 
            officer: email,
            photo: file?.filename,
            status: 0
        });

        sucessCode(res,{ findWard}, "Create thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const updateAds = async(req, res) =>{
    try{
        let { email } = req.params;
        const file = req.file;
        const obj = validateObj(req.body)

        let { id_ads, id_ads_location, id_board_type, quantity, width, height, 
            expired_date, req_time, reason, office} = obj

        const data = await model.Ads_update.create({
            id_ads, id_ads_location, quantity, width, height, 
            id_board_type, expired_date, req_time, reason, office,
            officer: email,
            photo: file?.filename,
            status: 0
        });
        sucessCode(res,data, "Create thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const updateAdsLocReport = async(req, res) =>{
    try{
        let { id_req } = req.params;
        const obj = validateObj(req.body)

        let { status, resolve, office, officer} = obj
        let data = await model.Ads_loc_report.update({
            office, officer, resolve, status
        },{
            where:{
                id_req
            }
        });
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const updateAdsReport = async(req, res) =>{
    try{
        let { id_req } = req.params;
        const obj = validateObj(req.body)

        let { status, resolve, office, officer} = obj
        let data = await model.Ads_report.update({
            office, officer, resolve, status
        },{
            where:{
                id_req
            }
        });
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const updateLocReport = async(req, res) =>{
    try{
        let { id_req } = req.params;
        const obj = validateObj(req.body)

        let { status, resolve, office, officer} = obj
        let data = await model.Location_report.update({
            office, officer, resolve, status
        },{
            where:{
                id_req
            }
        });
        sucessCode(res,data,"Get thành công")

    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

const adsCreate = async(req, res) =>{
    try{
        let { id_district } = req.params;
        const file = req.file
        const obj = validateObj(req.body);
        let {officer, office, id_ads_location, id_board_type, width, height, quantity,
            content, company, email, phone, address, start_date, end_date} = obj

        await model.Ads_create.create({
            officer, office, id_ads_location, id_board_type, width, height, quantity,
            content, company, email, phone, address, start_date, end_date,
            photo: file?.filename,
            status: 0
        })
        sucessCode(res,req.body,"Get thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

//  xóa hình ảnh nếu có
const deleteAdsCreate = async(req, res) =>{
    try{
        let { id_district } = req.params;
        sucessCode(res,req.body,"Get thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
} 

module.exports = {
    getAllAdsLoc, getMapInfo, 
    getInfo, getWard, updateInfo, updatePassword, forgetPassword,
    getAdsLocation, getAds, updateAdsLoc, updateAds,
    getAdsLocReport, getAdsReport, getLocReport,
    updateAdsLocReport, updateAdsReport, updateLocReport,
    getAdsCreate, adsCreate, deleteAdsCreate}