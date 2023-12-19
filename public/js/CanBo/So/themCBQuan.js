$(document).ready(function () {
  $("#canbo").addClass("snb-li-active");
  $.ajax({
    url: '/api/so/getAllQuan',
    type: 'GET',
    catch: false,
    dataType: 'json',
    success: function (data) {
      console.log(data);
      buildSelect(data.content);

      $.ajax({
        url: '/api/so/getAllCanboEmail',
        type: 'GET',
        catch: false,
        dataType: 'json',
        success: function (data) {
          allEmail = data.content.map(item => item.email);

          $("#add-district-officer button").on("click", function (e) {
            // e.preventDefault();
            const formData = new FormData($("#add-district-officer")[0]);
            const addData = Object.fromEntries(formData.entries());

            if (addData["fullname"] == "" || addData["birthdate"] == "" || addData["phone"] == "" || addData["email"] == "" || addData["id_district"] == "") { 
              return;
            }
            
            e.preventDefault();
            if (allEmail.includes(formData.get("email").trim())) {
              alert("Không thể thêm vì email cán bộ đã tồn tại");
            } else {
              $.ajax({
                url: '/api/so/addCanboQuan',
                type: 'POST',
                catch: false,
                dataType: 'json',
                data: addData,

                success: function (res) {
                  window.location.href = "/quanlicanbo";
                  console.log("Thêm thành công");
                },
                error: function (xhr, status, err) {
                  alert("Thêm cán bộ thất bại");
                  console.log(err);
                }
              });
            }
          });
        },
      });
    },
    error: function (xhr, status, err) {
      console.log(err);
    }
  });
});

function buildSelect(data) {
  let select = $("#add-district-officer #id-district");
  select.append("<option value=''>Chọn quận</option>")
  data.forEach(function (item) {
    select.append("<option value='" + item.id_district + "'>" + item.district + "</option>");
  });
}