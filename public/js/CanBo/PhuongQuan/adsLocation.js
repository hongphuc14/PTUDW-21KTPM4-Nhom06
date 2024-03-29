$(document).ready(function () {
  console.log(role);

  mapboxgl.accessToken = 'pk.eyJ1IjoicG1saW5oMjEiLCJhIjoiY2xueXVlb2ZsMDFrZTJsczMxcWhjbmo5cSJ9.uNguqPwdXkMJwLhu9Cwt6w';

  var loc_type, ads_type
  var info, filter_info, wards

  $.get(`/api/basic/getLocType`, function(data) {
    loc_type = data.content
  }).fail(function(error) {
    console.log(error);
  });

  $.get(`/api/basic/getAdsType`, function(data) {
    ads_type = data.content
  }).fail(function(error) {
    console.log(error);
  });
  
  if (role == 2){
    $.ajax({
      url: `/api/quan/getAdsLocationWard/${id_ward}`,
      type: "GET",
      beforeSend: function(){
        $("#loading-bg").show()
      },
      success: function(data) {
        $("#loading-bg").hide()
        info = data.content.map(function(data){
          let {id_ads_location, address, ward, loc_type, ads_type, 
            photo, is_zoning, longitude, latitude, district} = data
          let zoning_text = (is_zoning) ? "Đã quy hoạch" : "Chưa quy hoạch"
          id_ads_location = parseInt(id_ads_location)
          return [id_ads_location, address, ward, loc_type, ads_type,zoning_text, 
            '<button data-target="#view-image" data-toggle="modal" class="btn-cell btn view-btn"><i class="fa-solid fa-eye"></i></button>',
            '<button data-target="#edit-info" data-toggle="modal" class="btn-cell btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>',
            photo, longitude, latitude, is_zoning, district]
        })

        filter_info = [...info].sort(function(a, b) {
          return a[0] - b[0];
        })
        console.log(filter_info)

        $("#example").DataTable({
          data: filter_info
        });

        $('#example').DataTable().column(2).visible(false);

        $('#example_wrapper').on('click', ".view-btn", function(){
          let row = $(this).closest('tr').index();
          let page = $("#example_wrapper .page-item.active a").text();
          console.log(filter_info[row + 5 * parseInt(page) - 5][8]);
          let path  = "../../../public/image/image-placeholder.jpg"
          if (filter_info[row + 5 * parseInt(page) - 5][8] != "")
            path  = filter_info[row + 5 * parseInt(page) - 5][8]
          $('#view-image .photo').attr('src', path );
          return
        })
      
        $("#example_wrapper").on('click', '.edit-btn', function(event){
          $('button.style1-button').prop('disabled', true);
          var click_row = $(event.target).closest('tr').index();
          let page = $("#example_wrapper .page-item.active a").text();
          click_row = click_row + 5 * parseInt(page) - 5
          var imageData = null
          var address = filter_info[click_row][1], ward = filter_info[click_row][2],  district = filter_info[click_row][12] 
          var longitude = filter_info[click_row][9], latitude = filter_info[click_row][10]


          $("#address").val(`${address}, phường ${ward}, ${district} [${longitude},${latitude}]`)
          if (filter_info[click_row][11])
            $("#yes").prop('selected', true);
          else
            $("#no").prop('selected', true);

          $('#id_loc_type').empty();
          $('#id_ads_type').empty();

          loc_type?.forEach(function(type){
            if (filter_info[click_row][3] == type.loc_type) 
              $('#id_loc_type').append(`<option selected value=${type.id_loc_type}>${type.loc_type}</option>`);
            else 
              $('#id_loc_type').append(`<option value=${type.id_loc_type}>${type.loc_type}</option>`);
          })
      
          ads_type?.forEach(function(type){
            if (filter_info[click_row][4] == type.ads_type) 
              $('#id_ads_type').append(`<option selected value=${type.id_ads_type}>${type.ads_type}</option>`);
            else
              $('#id_ads_type').append(`<option value=${type.id_ads_type}>${type.ads_type}</option>`);
          })
      
          $('form.needs-validation').on('change keyup', function () {
            $('button.style1-button').prop('disabled', false);
          });

          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 17,
            language: 'vi'
          });
          // console.log(longitude, latitude);
          var language = new MapboxLanguage({
            defaultLanguage: 'vi'
          });
          map.addControl(language);
      
          var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
          });
          geocoder.setLanguage('vi');
      
          map.on('idle',function(){
            map.resize()
          })
      
          let marker = new mapboxgl.Marker();

          $('#search').append(geocoder.onAdd(map));
      
          $(".header-map i").on('click', async () =>  await geocoding());
          $('#search').on('keydown', async function(event) {
            if (event.keyCode === 13) { 
              await geocoding();
            }
          });

          function geocoding(){
            const searchText = $('#search').val()
      
            if (searchText.length > 0) 
              return new Promise ((resolve, reject) => {
                $.ajax({
                  url: `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(searchText)}&apiKey=X0xvqkeSEUDJe7SRWSwJTAm8wx3mJiE6SrN28Y3GVwc`,
                  type: 'GET',
                  data: {
                    access_token: mapboxgl.accessToken,
                    language: "vi"
                  },
                  success: function(response) {
                    
                    const features = response.items[0];
                    longitude = features.position.lng;
                    latitude = features.position.lat;
    
                    map.flyTo({
                      center: [longitude, latitude],
                      zoom: 17
                    });
        
                    marker.remove()
                    marker = new mapboxgl.Marker( {color: '#0B7B31' })
                    .setLngLat([longitude, latitude]) 
                    .addTo(map);
    
                    ward = features?.address?.district.substring(7)
                    district = features?.address?.city.substring(5)
                    address = (features?.address?.houseNumber && features?.address?.street)
                    ? features?.address?.houseNumber + " " +  features?.address?.street
                    : features?.address?.label.substring(0, features?.address?.label.indexOf(", Phường") )                 
                  
                    $("#address").val(`${address}, phường ${ward}, quận ${district} [${longitude}, ${latitude}]` )
                    resolve()
                  },
                  error: function() {
                    alert('Error occurred during geocoding');
                    reject()
                  }
                });
              })
            
          }
      
          map.on('click', function(e) {
            let lngLat = e.lngLat;
            longitude = lngLat.lng;
            latitude = lngLat.lat;
            marker.remove()
            marker = new mapboxgl.Marker({
              color: '#0B7B31'
            }).setLngLat(lngLat).addTo(map);
            map.flyTo({
              center: lngLat,
              zoom: 17
            })

            $.ajax({
              url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&apiKey=X0xvqkeSEUDJe7SRWSwJTAm8wx3mJiE6SrN28Y3GVwc&lang=vi`,
              method: 'GET',
              success: function(response) {
                // console.log(response)
                const feature = response.items[0].address
                ward = feature?.district.substring(7)
                district = feature?.city.substring(5)
                address = (feature?.houseNumber && feature?.street)
                ? feature?.houseNumber + " " +  feature?.street
                : feature?.label.substring(0, feature?.label.indexOf(", Phường") )
                
                $("#address").val(`${address}, phường ${ward}, quận ${district} [${longitude}, ${latitude}]`);
              },
              error: function(error) {
                console.log(error);
              }
            });
          });
      
          // Lắng nghe sự kiện mousedown trên bản đồ
          map.on('mousedown', function() {
            // Đặt kiểu con trỏ thành 'grab' khi nhấn chuột
            map.getCanvas().style.cursor = 'grab';
          });
      
          // Lắng nghe sự kiện mouseup trên bản đồ
          map.on('mouseup', function() {
            // Đặt kiểu con trỏ thành 'pointer' khi nhả chuột
            map.getCanvas().style.cursor = 'pointer';
          });
          
          $('#photo').on('change', function(e) {
            if (e.target.files[0])
            if (e.target.files[0].type.startsWith('image/') &&  e.target.files[0].size / 1024 <= 4*1024){
              imageData = e.target.files[0]
            }
            else if (!e.target.files[0].type.startsWith('image/')){
              alert('Hình ảnh minh họa phải có dạng .jpg, .png, .jpeg')
            }
            else if (!(e.target.files[0].size / 1024 <= 4)){
              alert('Hình ảnh minh họa không được vượt quá 4MB')
            }
          });
      
          $('#edit-info .style3-button').off('click').on('click', function(e) {
            $("#address").val("")
            $("#search").val("")
            $('#id_loc_type').val("")
            $('#id_ads_type').val("")
            $('#reason').val("")
            $('#photo').val("")
            $("#yes").prop('selected', false);
            $("#no").prop('selected', false);
          })
      
          $('#edit-info .style1-button').off('click').on('click', async function(e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện submit
            var originLocType, originAdsType;
            loc_type?.forEach(function(type){
              if (filter_info[click_row][3] == type.loc_type) 
                originLocType = type.id_loc_type;
            })
        
            ads_type?.forEach(function(type){
              if (filter_info[click_row][4] == type.ads_type) 
              originAdsType = type.id_ads_type;
            })
            
            var isZoningValue = ($('#is_zoning').val() === 'true');

            if(latitude === filter_info[click_row][10] && longitude === filter_info[click_row][9] && address === filter_info[click_row][1] && parseInt($('#id_loc_type').val()) === parseInt(originLocType) &&
            parseInt($('#id_ads_type').val()) === parseInt(originAdsType) && isZoningValue === filter_info[click_row][11] 
            && imageData == null){
              alert('Không có thông tin nào được thay đổi. Vui lòng chỉnh sửa ít nhất một thông tin để cập nhật.');
              return;
            }
            console.log(address);
            // console.log(longitude, latitude, filter_info[click_row][0]);
            let reason = $('#reason').val();
            if (!reason){
              alert("Trường 'Lí do chỉnh sửa' bắt buộc.")
            }
            else{
              $("#loading-bg").show();

              var formData = {
                id_ads_location: filter_info[click_row][0],
                latitude: latitude,
                longitude: longitude,
                address: address,
                ward: ward,
                district: district,
                id_loc_type: $('#id_loc_type').val(),
                id_ads_type: $('#id_ads_type').val(),
                is_zoning:  $('#is_zoning').val(),
                req_time: validateDate(new Date()),
                reason:  $('#reason').val(),
                office: role,
                photo: ""
              }
              
              $("form").get(0).reset();
              $("#edit-info").modal("hide")

              const signResponse = await fetch('/api/basic/uploadImage');
              const signData = await signResponse.json();

              const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";

              const cloudinaryData = new FormData();
              cloudinaryData.append("file", imageData);
              cloudinaryData.append("api_key", signData.apikey);
              cloudinaryData.append("timestamp", signData.timestamp);
              cloudinaryData.append("signature", signData.signature);
              cloudinaryData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
              cloudinaryData.append("folder", "image");

              fetch(url, {
                method: "POST",
                body: cloudinaryData
              })
              .then((response) => {
                  return response.text();
              })
              .then((data) => {
                  const photo = JSON.parse(data).secure_url
                  formData.photo = photo ? photo : "";
              })
              .finally(() => {
                sendUpdateRequest(`/api/quan/updateAdsLoc/${email}`, formData)
              });
            }
          })
        })

      }
    })
  } else if (role == 1){

    $.get(`/api/quan/getWard/${id_district}`, function(data) {
      wards = data.content.map(ward => ward.ward).sort(sortWard);
      display_wards = wards.map(ward => (!isNaN(parseInt(ward))) ? `phường ${ward}` : ward);
      console.log(display_wards);
      renderWard(display_wards);
    }).fail(function(error) {
      console.log(error);
    });

    $.ajax({
      url: `/api/quan/getAdsLocation/${id_district}`,
      type: "GET",
      beforeSend: function(){
        $("#loading-bg").show()
      },
      success: function(data) {
        $("#loading-bg").hide()
        info = data.content.map(function(data){
          let {id_ads_location, address, ward, loc_type, ads_type, 
            photo, is_zoning, longitude, latitude, district} = data
          let zoning_text = (is_zoning) ? "Đã quy hoạch" : "Chưa quy hoạch"
          id_ads_location = parseInt(id_ads_location)
          return [id_ads_location, address, ward, loc_type, ads_type,zoning_text, 
            '<button data-target="#view-image" data-toggle="modal" class="btn-cell btn view-btn"><i class="fa-solid fa-eye"></i></button>',
            '<button data-target="#edit-info" data-toggle="modal" class="btn-cell btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>',
            photo, longitude, latitude, is_zoning, district]
        })

        filter_info = [...info].sort(function(a, b) {
          return a[0] - b[0];
        })
        console.log(filter_info)

        $("#example").DataTable({
          data: filter_info
        });

        $('#example_wrapper').on('click', ".view-btn", function(){
          let row = $(this).closest('tr').index();
          let page = $("#example_wrapper .page-item.active a").text();
          console.log(filter_info[row + 5 * parseInt(page) - 5][8]);
          let path  = "../../../public/image/image-placeholder.jpg"
          if (filter_info[row + 5 * parseInt(page) - 5][8] != "")
            path  = filter_info[row + 5 * parseInt(page) - 5][8]
          $('#view-image .photo').attr('src', path );
          return
        })
      
        $('.ward-table input').on("click", function() {
          var id_ward = $(this).attr('id');
          id_ward = id_ward.slice(id_ward.indexOf("-") + 1)
      
          if ($(this).is(':checked')) {
            for (var i = 0; i < info.length; i++){
              if (info[i][2] == wards[id_ward])
              filter_info.push(info[i]);
            }
          } else {
            var result = []
            for (var i = 0; i < filter_info.length; i++){
              if (filter_info[i][2] != wards[id_ward])
                result.push(filter_info[i]);
            }
            filter_info = [...result]
          }

          $("#example").DataTable().clear().rows.add(filter_info.sort(function(a, b) {
            return a[0] - b[0];
          })).draw();
          // return
        });
      
        $("#example_wrapper").on('click', '.edit-btn', function(event){
          $('button.style1-button').prop('disabled', true);
          var click_row = $(event.target).closest('tr').index();
          let page = $("#example_wrapper .page-item.active a").text();
          click_row = click_row + 5 * parseInt(page) - 5
          var imageData = null
          var address = filter_info[click_row][1], ward = filter_info[click_row][2],  district = filter_info[click_row][12] 
          var longitude = filter_info[click_row][9], latitude = filter_info[click_row][10]

          // console.log(filter_info[click_row])

          $("#address").val(`${address}, phường ${ward}, quận ${district} [${longitude},${latitude}]`)
          
          if (filter_info[click_row][11])
            $("#yes").prop('selected', true);
          else
            $("#no").prop('selected', true);

          $('#id_loc_type').empty();
          $('#id_ads_type').empty();

          loc_type?.forEach(function(type){
            if (filter_info[click_row][3] == type.loc_type) 
              $('#id_loc_type').append(`<option selected value=${type.id_loc_type}>${type.loc_type}</option>`);
            else 
              $('#id_loc_type').append(`<option value=${type.id_loc_type}>${type.loc_type}</option>`);
          })
      
          ads_type?.forEach(function(type){
            if (filter_info[click_row][4] == type.ads_type) 
              $('#id_ads_type').append(`<option selected value=${type.id_ads_type}>${type.ads_type}</option>`);
            else
              $('#id_ads_type').append(`<option value=${type.id_ads_type}>${type.ads_type}</option>`);
          })
      
          $('form.needs-validation').on('change keyup', function () {
            $('button.style1-button').prop('disabled', false);
          });

          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 17,
            language: 'vi'
          });
          // console.log(longitude, latitude);
          var language = new MapboxLanguage({
            defaultLanguage: 'vi'
          });
          map.addControl(language);
      
          var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
          });
          geocoder.setLanguage('vi');
      
          map.on('idle',function(){
            map.resize()
          })
          let marker = new mapboxgl.Marker();

          $('#search').append(geocoder.onAdd(map));
      
          $(".header-map i").on('click', async () => {
            await geocoding()
          });
          $('#search').on('keydown', async function(event) {
            if (event.keyCode === 13) {
              await geocoding()
            }
          });

          function geocoding(){
            const searchText = $('#search').val()
      
            if (searchText != '')
            return new Promise(function(resolve, reject) {
              $.ajax({
                url: `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(searchText)}&apiKey=X0xvqkeSEUDJe7SRWSwJTAm8wx3mJiE6SrN28Y3GVwc`,
                type: 'GET',
                data: {
                  access_token: mapboxgl.accessToken,
                  language: "vi"
                },
                success: function(response) {
                  
                  const features = response.items[0];
                  longitude = features.position.lng;
                  latitude = features.position.lat;

                  map.flyTo({
                    center: [longitude, latitude],
                    zoom: 17
                  });
      
                  marker.remove()
                  marker = new mapboxgl.Marker( {color: '#0B7B31' })
                  .setLngLat([longitude, latitude]) 
                  .addTo(map);

                  ward = features?.address?.district.substring(7)
                  district = features?.address?.city.substring(5)
                  address = (features?.address?.houseNumber && features?.address?.street)
                  ? features?.address?.houseNumber + " " +  features?.address?.street
                  : features?.address?.label.substring(0, features?.address?.label.indexOf(", Phường") )                 
                
                  $("#address").val(`${address}, phường ${ward}, quận ${district} [${longitude}, ${latitude}]` )

                  // $(".style1-button").prop("disabled",false)
                  
                  resolve()
                },
                error: function() {
                  alert('Error occurred during geocoding');
                  reject()
                }
              });
            })
          }
      
          map.on('click', function(e) {
            let lngLat = e.lngLat;
            longitude = lngLat.lng;
            latitude = lngLat.lat;
            marker.remove()
            marker = new mapboxgl.Marker({
              color: '#0B7B31'
            }).setLngLat(lngLat).addTo(map);
            map.flyTo({
              center: lngLat,
              zoom: 17
            })

            $.ajax({
              url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&apiKey=X0xvqkeSEUDJe7SRWSwJTAm8wx3mJiE6SrN28Y3GVwc&lang=vi`,
              method: 'GET',
              success: function(response) {
                const feature = response.items[0].address
                ward = feature?.district.substring(7)
                district = feature?.city.substring(5)
                address = (feature?.houseNumber && feature?.street)
                ? feature?.houseNumber + " " +  feature?.street
                : feature?.label.substring(0, feature?.label.indexOf(", Phường") )
                
                $("#address").val(`${address}, phường ${ward}, quận ${district} [${longitude}, ${latitude}]`);
              },
              error: function(error) {
                console.log(error);
              }
            });
          });
      
          // Lắng nghe sự kiện mousedown trên bản đồ
          map.on('mousedown', function() {
            // Đặt kiểu con trỏ thành 'grab' khi nhấn chuột
            map.getCanvas().style.cursor = 'grab';
          });
      
          // Lắng nghe sự kiện mouseup trên bản đồ
          map.on('mouseup', function() {
            // Đặt kiểu con trỏ thành 'pointer' khi nhả chuột
            map.getCanvas().style.cursor = 'pointer';
          });
          
          $('#photo').on('change', function(e) {
            if (e.target.files[0])
            if (e.target.files[0].type.startsWith('image/') &&  e.target.files[0].size / 1024 <= 4*1024){
              imageData = e.target.files[0]
            }
            else if (!e.target.files[0].type.startsWith('image/')){
              alert('Hình ảnh minh họa phải có dạng .jpg, .png, .jpeg')
            }
            else if (!(e.target.files[0].size / 1024 <= 4)){
              alert('Hình ảnh minh họa không được vượt quá 4MB')
            }
          });
      
          $('#edit-info .style3-button').off('click').on('click', function(e) {
            $("#address").val("")
            $("#search").val("")
            $('#id_loc_type').val("")
            $('#id_ads_type').val("")
            $('#reason').val("")
            $('#photo').val("")
            $("#yes").prop('selected', false);
            $("#no").prop('selected', false);
          })
      
          $('#edit-info .style1-button').off('click').on('click', async function(e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện submit

            var originLocType, originAdsType;
            loc_type?.forEach(function(type){
              if (filter_info[click_row][3] == type.loc_type) 
                originLocType = type.id_loc_type;
            })
        
            ads_type?.forEach(function(type){
              if (filter_info[click_row][4] == type.ads_type) 
              originAdsType = type.id_ads_type;
            })
            
            var isZoningValue = ($('#is_zoning').val() === 'true');

            if(latitude === filter_info[click_row][10] && longitude === filter_info[click_row][9] && address === filter_info[click_row][1] && parseInt($('#id_loc_type').val()) === parseInt(originLocType) &&
            parseInt($('#id_ads_type').val()) === parseInt(originAdsType) && isZoningValue === filter_info[click_row][11] 
            && imageData == null){
              alert('Không có thông tin nào được thay đổi. Vui lòng chỉnh sửa ít nhất một thông tin để cập nhật.');
              return;
            }
            
            //console.log(address);
            let reason = $('#reason').val();
            if (!reason){
              alert("Trường 'Lí do chỉnh sửa' bắt buộc.")
            }
            else{
              $("#loading-bg").show();

              var formData = {
                id_ads_location: filter_info[click_row][0],
                latitude: latitude,
                longitude: longitude,
                address: address,
                ward: ward,
                district: district,
                id_loc_type: $('#id_loc_type').val(),
                id_ads_type: $('#id_ads_type').val(),
                is_zoning:  $('#is_zoning').val(),
                req_time: validateDate(new Date()),
                reason:  $('#reason').val(),
                office: role,
                photo: ""
              }
              
              $("form").get(0).reset();
              $("#edit-info").modal("hide")

              const signResponse = await fetch('/api/basic/uploadImage');
              const signData = await signResponse.json();

              const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";

              const cloudinaryData = new FormData();
              cloudinaryData.append("file", imageData);
              cloudinaryData.append("api_key", signData.apikey);
              cloudinaryData.append("timestamp", signData.timestamp);
              cloudinaryData.append("signature", signData.signature);
              cloudinaryData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
              cloudinaryData.append("folder", "image");

              fetch(url, {
                method: "POST",
                body: cloudinaryData
              })
              .then((response) => {
                  return response.text();
              })
              .then((data) => {
                  const photo = JSON.parse(data).secure_url
                  formData.photo = photo ? photo : "";
              })
              .finally(() => {
                sendUpdateRequest(`/api/quan/updateAdsLoc/${email}`, formData)
              });
            }
          })
        })

      }
    })
  }
});

function sendUpdateRequest(url, formData){
  $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function(response) {
      $("#loading-bg").hide();
      alert("Yêu cầu chỉnh sửa thành công")
      console.log(response);
    },
    error: function(xhr, status, error) {
      $("#loading-bg").hide();
      if (xhr.status == 400){
        const errorMessage = xhr.responseJSON?.message;
        alert(errorMessage);
      } 
      else{
        alert("Yêu cầu chỉnh sửa thất bại")
      }
    }
  });
}