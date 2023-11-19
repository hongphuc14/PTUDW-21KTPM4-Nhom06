$(document).ready(function () {
  var keysToKeep = ["cbphuong", "cbso", "cbquan"];
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  if (!keysToKeep.includes(key)) {
    localStorage.removeItem(key);
  }
}

    let cbphuong = [
      ['21127341@student.hcmus.edu.vn', 'Ngô Ngọc Liên', '123@nhomsau', '0903342521', '2002-06-25', 25],
      ['21127350@student.hcmus.edu.vn', 'Nguyễn Cao Luận', '123@nhomsau', '0987654321', '1989-05-02', 32],
      ['21127637@student.hcmus.edu.vn', 'Phan Mỹ Linh', '123@nhomsau', '0781122345', '1998-08-06', 9],
      ['cbphuong1@gmail.com', 'Trần Đăng Khôi', '123@nhomsau', '0903112233', '1986-10-14', 1],
      ['cbphuong2@gmail.com', 'Phạm Ngọc Nga', '123@nhomsau', '0978543210', '1993-08-30', 3],
      ['cbphuong3@gmail.com', 'Nguyễn Hải Đăng', '123@nhomsau', '0912345678', '1992-03-05', 4],
      ['cbphuong4@gmail.com', 'Nguyễn Minh Huy', '123@nhomsau', '0945321654', '1990-04-23', 5],
      ['phuong@gmail.com', 'Nguyễn Trần Hồng Phúc', '123@nhomsau', '0900012345', '1995-04-01', 2]
  ];

    let cbso = [['so@gmail.com', 'Ngô Ngọc Liên', '123@nhomsau', '0903342521', '2002-06-25'],
    ['21127672@student.hcmus.edu.vn', 'Nguyễn Trần Hồng Phúc', '123@nhomsau', '0987654321', '1989-05-02'],
    ['21127637@student.hcmus.edu.vn', 'Phan Mỹ Linh', '123@nhomsau', '0781122345', '1998-08-06'],
    ['21127350@student.hcmus.edu.vn', 'Nguyễn Cao Luận', '123@nhomsau', '0903112233', '1986-10-14']]

    
    const cbquan = [['quan@gmail.com', 'Nguyễn Trần Minh Anh', '123@nhomsau', '0903342521', '2002-06-25', 1],
    ['nthphuc21@clc.fitus.edu.vn', 'Phan Đức Long', '123@nhomsau', '0987654321', '1989-05-02', 1],
    ['pmlinh21@clc.fitus.edu.vn', 'Ngô Minh Tuấn', '123@nhomsau', '0781122345', '1998-08-06', 3],
    ['ncluan21@clc.fitus.edu.vn', 'Nguyễn Hồng Nhung', '123@nhomsau', '0903112233', '1986-10-14', 3]]


    localStorage.setItem('cbquan', JSON.stringify(cbquan));
    localStorage.setItem('cbphuong', JSON.stringify(cbphuong));
    localStorage.setItem('cbso', JSON.stringify(cbso));

    const loginBtn = $('#login-button');
    loginBtn.on('click', function (e) {
        e.preventDefault();

        const email = $('#email').val();
        const password = $('#password').val();

        if (!email) {
            alert('Email không được để trống');
            return;
        }
        else if (email.indexOf('@') == -1 || (email.indexOf('@') == email.length - 1)) {
            alert('Email không hợp lệ');
            return;
        }
        else if (!password) {
            alert('Mật khẩu không được để trống');
            return;
        }
        else{
            if (email == "quan@gmail.com"){
                localStorage.setItem('role', '1');
                localStorage.setItem('email', email);
                const QuanAdsCreate = [
                    [
                      3,
                      'pmlinh21@clc.fitus.edu.vn',
                      1,
                      20,
                      8,
                      11.23,
                      5.42,
                      3,
                      'Xây dựng ước mơ của bạn. Chất lượng đến từng chi tiết.',
                      'image1.png',
                      'Công ty Xây dựng Tiến Đạt',
                      'info@tiendatconstruction.vn',
                      '0123456789',
                      '14 Alexandre de Rhodes',
                      '2023-08-15',
                      '2023-12-11',
                      1,
                      'Trụ/Cụm pano',
                      'Bến Nghé'
                    ],
                    [
                      5,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      22,
                      7,
                      9.88,
                      4.67,
                      4,
                      'Hương vị tinh tế từ bếp đến bát. Đẳng cấp trong từng giọt mồ hôi.',
                      'image2.png',
                      'Công ty Thực phẩm Hương Thảo',
                      'info@huongthaofoods.com',
                      '0776543210',
                      '55-53 Nguyễn Thị Minh Khai',
                      '2023-09-07',
                      '2023-12-20',
                      1,
                      'Trụ treo băng rôn ngang',
                      'Bến Nghé'
                    ],
                    [
                      6,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      21,
                      1,
                      5.34,
                      6.11,
                      1,
                      'Sáng tạo không gian xanh. Thiên nhiên sống động trong lòng thành phố.',
                      'image3.png',
                      'EverGreen Landscapes',
                      'info@evergreenlandscapes.com',
                      '0145678901',
                      '108 Nguyễn Du',
                      '2023-09-14',
                      '2023-12-24',
                      0,
                      'Trụ bảng hiflex',
                      'Bến Thành'
                    ],
                    [
                      9,
                      'pmlinh21@clc.fitus.edu.vn',
                      1,
                      15,
                      10,
                      2.97,
                      10.75,
                      1,
                      'Sức khỏe không giới hạn. Chăm sóc sức khỏe tại đỉnh.',
                      'image4.png',
                      'Công ty Y tế Hoàn Hảo',
                      'info@hoanhaohealthcare.com',
                      '0112233445',
                      '161-141 Nguyễn Du',
                      '2023-10-09',
                      '2024-01-08',
                      1,
                      'Trung tâm thương mại',
                      'Bến Thành'
                    ],
                    [
                      11,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      14,
                      2,
                      6.78,
                      11.24,
                      1,
                      'Hỗ Trợ Cộng Đồng, Xây Dựng Tương Lai! Chúng tôi đầu tư vào các dự án xã hội để tạo ra những thay đổi tích cực trong cuộc sống hàng ngày của bạn.',
                      'image5.png',
                      'Công ty Du lịch Phong Cảnh Đẹp',
                      'info@phongcachdeptravel.com',
                      '0743216547',
                      '59 Nguyễn Thị Minh Khai',
                      '2023-10-22',
                      '2024-01-18',
                      0,
                      'Trụ màn hình điện tử LED',
                      'Bến Thành'
                    ],
                    [
                      12,
                      'nthphuc21@clc.fitus.edu.vn',
                      1,
                      21,
                      7,
                      14.2,
                      12.68,
                      2,
                      'Quản lý tài chính, xây dựng tương lai. Đối tác tài chính đáng tin cậy.',
                      '',
                      'SilverLine Financial Services',
                      'info@silverlinefinancials.com',
                      '0134567890',
                      '108 Nguyễn Du',
                      '2023-11-01',
                      '2024-01-23',
                      1,
                      'Trụ treo băng rôn ngang',
                      'Bến Thành'
                    ],
                    [
                      13,
                      'ncluan21@clc.fitus.edu.vn',
                      2,
                      20,
                      1,
                      1.54,
                      13.91,
                      3,
                      'Nội thất độc đáo, phản ánh cá nhân. Không gian sống đẳng cấp.',
                      '',
                      'Công ty Trang trí Nội thất Mỹ Ngọc',
                      'info@myngocinteriors.com',
                      '0965432101',
                      '14 Alexandre de Rhodes',
                      '2023-11-08',
                      '2024-01-27',
                      1,
                      'Trụ bảng hiflex',
                      'Bến Nghé'
                    ],
                    [
                      15,
                      'nthphuc21@clc.fitus.edu.vn',
                      1,
                      18,
                      8,
                      15,
                      6.78,
                      1,
                      'Học ngoại ngữ, mở cánh cửa thế giới. Giáo viên chất lượng, học viên tự tin.',
                      '',
                      'Công ty Đào tạo Ngoại ngữ Quốc tế',
                      'info@quocnuguageschool.com',
                      '0156789012',
                      '66 Trương Định',
                      '2023-11-21',
                      '2024-02-06',
                      1,
                      'Trụ/Cụm pano',
                      'Bến Thành'
                    ],
                    [
                      19,
                      'pmlinh21@clc.fitus.edu.vn',
                      2,
                      3,
                      3,
                      11.98,
                      2.89,
                      1,
                      'Thể thao đỉnh cao, niềm vui không ngừng. Thiết bị chất lượng, niềm đam mê không giới hạn.',
                      '',
                      'Công ty Thể thao Đỉnh Cao',
                      'info@dinhhaothethao.vn',
                      '0911112222',
                      '84 Lê Lai',
                      '2023-12-24',
                      '2024-02-24',
                      1,
                      'Trụ hộp đèn',
                      'Phạm Ngũ Lão'
                    ],
                    [
                      21,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      1,
                      2,
                      1,
                      1,
                      1,
                      '1',
                      '1699769529139_gradient.png',
                      '1',
                      '1',
                      '1',
                      '59 Nguyễn Thị Minh Khai',
                      '2023-11-11',
                      '2023-11-24',
                      0,
                      'Trụ màn hình điện tử LED',
                      'Bến Thành'
                    ],
                    [
                      22,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      1,
                      2,
                      1,
                      1,
                      1,
                      '1',
                      '1699769662678_gradient.png',
                      '1',
                      '1',
                      '1',
                      '59 Nguyễn Thị Minh Khai',
                      '2023-11-10',
                      '2023-11-22',
                      0,
                      'Trụ màn hình điện tử LED',
                      'Bến Thành'
                    ]
                  ]
                const QuanAdsReport = [
                    [
                      1,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      1,
                      1,
                      'Nguyễn Văn Anh',
                      'nvanh@gmail.com',
                      '0912345678',
                      'Biển quảng cáo hiển thị thông điệp chính trị không liên quan đến khu vực này. Mong muốn chính quyền địa phương kiểm tra và đảm bảo rằng quảng cáo trên đường không vi phạm các quy định liên quan.',
                      '',
                      '',
                      '2023-08-05',
                      1,
                      'Kiểm tra thông tin quảng cáo và yêu cầu loại bỏ thông điệp không liên quan. Đảm bảo quảng cáo tuân thủ luật lệ và không gây phiền hà cho cộng đồng.',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      18,
                      'ncluan21@clc.fitus.edu.vn',
                      1,
                      1,
                      1,
                      'Mai Văn Tiến',
                      'mvtien@gmail.com',
                      '0912765432',
                      'Tôi nhận thấy một biển quảng cáo chính trị trên đường với nội dung không chính xác. Biển này chứa thông tin sai lệch về ứng cử viên và chính sách, cần được kiểm tra và sửa chữa.',
                      '',
                      '',
                      '2023-10-08',
                      1,
                      'Kiểm tra thông tin và yêu cầu chỉnh sửa ngay lập tức.',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      24,
                      'pmlinh21@clc.fitus.edu.vn',
                      1,
                      1,
                      1,
                      'Đinh Văn Đức',
                      'dvduc@gmail.com',
                      '0798765432',
                      'Biển quảng cáo xã hội hóa này chứa thông tin không chính xác về tổ chức hoặc sự kiện. Đề nghị kiểm tra và sửa chữa để tránh gây hiểu lầm cho cộng đồng.',
                      '',
                      '',
                      '2023-09-22',
                      1,
                      'Thực hiện kiểm tra thông tin và yêu cầu chỉnh sửa ngay.',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      2,
                      'nthphuc21@clc.fitus.edu.vn',
                      2,
                      2,
                      1,
                      'Lê Thị Bình',
                      'ltb@gmail.com',
                      '0923456789',
                      'Biển quảng cáo chính trị chứa thông điệp không chính xác về chính sách công cộng. Mong muốn chính trị gia hoặc tổ chức liên quan xem xét và điều chỉnh nội dung quảng cáo để tránh thông tin không đúng.',
                      '',
                      '',
                      '2023-08-12',
                      1,
                      'Liên hệ chính trị gia hoặc tổ chức chính trị liên quan và yêu cầu sửa đổi thông điệp không chính xác. Đảm bảo quảng cáo không truyền đạt thông tin sai lệch về chính sách công cộng.',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      11,
                      '',
                      null,
                      3,
                      3,
                      'Bùi Văn Nam',
                      'bvn@gmail.com',
                      '0798234567',
                      'Nhìn thấy quảng cáo sản phẩm mới. Đề xuất thêm thông tin về giá cả và cách sử dụng sản phẩm. Cảm thấy quan tâm và muốn biết thêm để đưa ra quyết định mua hàng.',
                      '',
                      '',
                      '2023-10-02',
                      0,
                      '',
                      'Đóng góp ý kiến',
                      'Bến Thành'
                    ],
                    [
                      21,
                      '',
                      null,
                      4,
                      1,
                      'Trần Thị Xuân',
                      'ttxuan@gmail.com',
                      '0712654321',
                      'Biển quảng cáo thương mại này có vẻ chứa thông tin không chính xác về sản phẩm. Đề nghị kiểm tra và chỉnh sửa thông tin để tránh gây hiểu lầm cho người tiêu dùng.',
                      '',
                      '',
                      '2023-09-01',
                      0,
                      '',
                      'Tố giác sai phạm',
                      'Phạm Ngũ Lão'
                    ],
                    [
                      3,
                      'pmlinh21@clc.fitus.edu.vn',
                      2,
                      5,
                      2,
                      'Trần Minh Châu',
                      'tmc@gmail.com',
                      '0976543210',
                      'Quảng cáo sản phẩm không có thông tin liên hệ hoặc địa chỉ cửa hàng. Mong muốn doanh nghiệp cung cấp thông tin liên lạc để người dùng có thể tìm thấy cửa hàng dễ dàng hơn.',
                      '',
                      '',
                      '2023-08-17',
                      1,
                      'Liên hệ doanh nghiệp để yêu cầu cung cấp thông tin liên hệ và địa chỉ cửa hàng. Đảm bảo rằng quảng cáo chứa thông tin đầy đủ để người dùng dễ dàng liên hệ và đến cửa hàng.',
                      'Đăng ký nội dung',
                      'Phạm Ngũ Lão'
                    ],
                    [
                      20,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      6,
                      3,
                      'Nguyễn Minh Vương',
                      'nmvuong@gmail.com',
                      '0932123456',
                      'Tôi muốn đóng góp ý kiến về nội dung của biển quảng cáo chính trị này. Đề xuất cung cấp thông tin chi tiết hơn về chính sách và kế hoạch cụ thể của ứng cử viên để người dân hiểu rõ hơn.',
                      '',
                      '',
                      '2023-10-03',
                      1,
                      'Ghi nhận ý kiến, đề xuất yêu cầu thêm thông tin chi tiết.',
                      'Đóng góp ý kiến',
                      'Phạm Ngũ Lão'
                    ],
                    [
                      5,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      9,
                      4,
                      'Hoàng Đức Em',
                      'hdem@gmail.com',
                      '0798765432',
                      'Quảng cáo có chứa thông tin không rõ ràng về ưu đãi hoặc giảm giá. Mong muốn nhận được giải đáp thắc mắc về các điều kiện và điều khoản của ưu đãi được quảng cáo để tránh nhầm lẫn khi mua hàng.',
                      '',
                      '',
                      '2023-08-28',
                      1,
                      'Liên hệ doanh nghiệp để yêu cầu giải đáp thắc mắc của người tiêu dùng. Đảm bảo thông tin chi tiết và rõ ràng về sản phẩm hoặc dịch vụ để tránh hiểu lầm.',
                      'Giải đáp thắc mắc',
                      'Bến Thành'
                    ],
                    [
                      13,
                      '',
                      null,
                      15,
                      3,
                      'Trịnh Văn Phúc',
                      'tvphuc@gmail.com',
                      '0976543021',
                      'Tôi đề xuất thêm thông tin về mục tiêu và lợi ích của chương trình xã hội hóa này để người dân hiểu rõ hơn về mục đích của hoạt động này.',
                      '',
                      '',
                      '2023-10-15',
                      0,
                      '',
                      'Đóng góp ý kiến',
                      'Bến Thành'
                    ],
                    [
                      10,
                      '',
                      null,
                      17,
                      2,
                      'Trần Thị Mai',
                      'ttmai@gmail.com',
                      '0943210765',
                      'Ghi nhận quảng cáo chính trị với thông tin đầy đủ. Mong muốn biết rõ về nội dung, nguồn gốc và mục tiêu của quảng cáo để hiểu rõ hơn về các chủ đề chính trị đang được thảo luận.',
                      '',
                      '',
                      '2023-09-26',
                      0,
                      '',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      12,
                      '',
                      null,
                      17,
                      4,
                      'Phan Thị Oanh',
                      'ptoanh@gmail.com',
                      '0732123456',
                      'Quảng cáo một dịch vụ giải quyết vấn đề y tế. Đề xuất cung cấp thông tin chi tiết về cách dịch vụ hoạt động và chi phí liên quan. Đây là một vấn đề quan trọng, nên cần thông tin đầy đủ để đưa ra quyết định.',
                      '',
                      '',
                      '2023-10-09',
                      0,
                      '',
                      'Giải đáp thắc mắc',
                      'Bến Thành'
                    ],
                    [
                      23,
                      'ncluan21@clc.fitus.edu.vn',
                      2,
                      17,
                      4,
                      'Lưu Thị Ánh',
                      'lanh@gmail.com',
                      '0123123456',
                      'Tôi có một số thắc mắc về sản phẩm được quảng cáo. Đề xuất cung cấp thông tin liên hệ hoặc website để tôi có thể tìm hiểu thêm về sản phẩm này.',
                      '',
                      '',
                      '2023-09-14',
                      1,
                      'Cung cấp thông tin liên hệ chính thức để giải quyết thắc mắc.',
                      'Giải đáp thắc mắc',
                      'Bến Thành'
                    ],
                    [
                      25,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      17,
                      2,
                      'Nguyễn Thị Hoài',
                      'nthoai@gmail.com',
                      '0712765432',
                      'Biển quảng cáo này cần được đăng ký nội dung để đảm bảo tính minh bạch và tránh vi phạm các quy định về quảng cáo xã hội hóa.',
                      '',
                      '',
                      '2023-10-02',
                      1,
                      'Liên hệ với tổ chức, yêu cầu đăng ký nội dung ngay lập tức.',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      19,
                      'pmlinh21@clc.fitus.edu.vn',
                      1,
                      20,
                      2,
                      'Vũ Thị Uyên',
                      'vtuyen@gmail.com',
                      '0776543890',
                      'Biển quảng cáo chính trị này cần phải đăng ký nội dung để đảm bảo tính chính xác và minh bạch của thông điệp được truyền đạt.',
                      '',
                      '',
                      '2023-08-31',
                      1,
                      'Liên hệ với chủ quảng cáo, yêu cầu đăng ký ngay.',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      7,
                      '',
                      null,
                      22,
                      3,
                      'Đinh Minh Hiếu',
                      'dmhieu@gmail.com',
                      '0776543210',
                      'Quảng cáo không truyền đạt được ưu điểm đặc biệt của sản phẩm hoặc dịch vụ. Mong muốn doanh nghiệp xem xét việc tăng cường thông tin để người tiêu dùng hiểu rõ về giá trị của sản phẩm.',
                      '',
                      '',
                      '2023-09-08',
                      0,
                      '',
                      'Đóng góp ý kiến',
                      'Bến Nghé'
                    ],
                    [
                      9,
                      'pmlinh21@clc.fitus.edu.vn',
                      2,
                      19,
                      1,
                      'Lý Văn Long',
                      'lylong@gmail.com',
                      '0987654321',
                      'Nhận thức về biển quảng cáo chính trị trên đường. Nội dung không chính xác, thiên hướng chống đối một đảng. Đề nghị kiểm tra thông tin và đảm bảo công bằng trong quảng cáo.',
                      '',
                      '',
                      '2023-09-21',
                      1,
                      'Kiểm tra và xác minh thông tin quảng cáo. Nếu phát hiện không chính xác, yêu cầu rút quảng cáo và yêu cầu thông tin chính xác từ người đăng.',
                      'Tố giác sai phạm',
                      'Bến Nghé'
                    ]
                  ]
                const QuanAdsLocReport = [
                    [
                      1,
                      '',
                      null,
                      20,
                      1,
                      'Nguyễn Thị Lan Anh',
                      'ntlananh@gmail.com',
                      '0901234567',
                      'Tôi nhận thấy có một quảng cáo không liên quan tại đây. Mong sở kiểm tra và loại bỏ quảng cáo này để giữ cho bản đồ chất lượng hơn.',
                      '',
                      '',
                      '2023-08-05',
                      0,
                      '',
                      'Tố giác sai phạm',
                      'Bến Nghé'
                    ],
                    [
                      5,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      24,
                      1,
                      'Võ Ngọc Mai',
                      'vnmai@gmail.com',
                      '0945678901',
                      'Tôi phát hiện một quảng cáo không hợp lý tại khu vực công cộng gần công viên. Xin hãy kiểm tra và loại bỏ quảng cáo này để bảo vệ vẻ đẹp của khu vực công cộng này.',
                      '',
                      '',
                      '2023-08-28',
                      1,
                      'Xác minh và loại bỏ quảng cáo không phù hợp gần công viên. Thông báo việc xử lý này cho người báo cáo để họ biết rằng vấn đề đã được giải quyết.',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      6,
                      '',
                      null,
                      21,
                      1,
                      'Hoàng Đức Long',
                      'hdl@gmail.com',
                      '0956789012',
                      'Phát hiện quảng cáo không phù hợp trên bảng quảng cáo công cộng. Mong muốn công việc kiểm tra và xử lý để duy trì trật tự và vẻ đẹp của khu vực.',
                      '',
                      '',
                      '2023-09-02',
                      0,
                      '',
                      'Tố giác sai phạm',
                      'Bến Thành'
                    ],
                    [
                      16,
                      'nnlien21@clc.fitus.edu.vn',
                      2,
                      20,
                      1,
                      'Lê Văn Đức',
                      'lvduc@gmail.com',
                      '0836677889',
                      'Quảng cáo tại góc đường thiếu ánh sáng ban đêm, tạo ra tình trạng an toàn không tốt. Yêu cầu sửa chữa để tránh tai nạn giao thông.',
                      '',
                      '',
                      '2023-09-03',
                      1,
                      'Gửi thông báo cho công ty quảng cáo, yêu cầu tăng cường ánh sáng xung quanh quảng cáo để đảm bảo an toàn giao thông.',
                      'Tố giác sai phạm',
                      'Bến Nghé'
                    ],
                    [
                      23,
                      '',
                      null,
                      20,
                      1,
                      'Đỗ Thị Kim Ngân',
                      'dtkngan@gmail.com',
                      '0754455667',
                      'Quảng cáo vi phạm văn hóa gần công viên, chứa hình ảnh không phù hợp với trẻ em và gia đình.',
                      '',
                      '',
                      '2023-09-14',
                      0,
                      '',
                      'Tố giác sai phạm',
                      'Bến Nghé'
                    ],
                    [
                      9,
                      '',
                      null,
                      3,
                      2,
                      'Đặng Quang Minh',
                      'dqminh@gmail.com',
                      '0989012345',
                      'Cần đăng ký quảng cáo cho sự kiện tại địa điểm công cộng trong tuần tới. Rất mong nhận được hướng dẫn về thủ tục và yêu cầu cần thiết.',
                      '',
                      '',
                      '2023-09-21',
                      0,
                      '',
                      'Đăng ký nội dung',
                      'Phạm Ngũ Lão'
                    ],
                    [
                      14,
                      'nnlien21@clc.fitus.edu.vn',
                      1,
                      18,
                      2,
                      'Hoàng Văn Thắng',
                      'hvthang@gmail.com',
                      '0854455667',
                      'Biển quảng cáo chứa thông tin không chính xác về một sự kiện sắp tới. Mong được sửa chữa.',
                      'image1.png',
                      'image2.png',
                      '2023-10-21',
                      1,
                      'Thông báo lỗi đến công ty quảng cáo, yêu cầu cập nhật thông tin chính xác về sự kiện và theo dõi việc điều chỉnh.',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      17,
                      'pmlinh21@clc.fitus.edu.vn',
                      1,
                      13,
                      2,
                      'Phan Thị Quỳnh',
                      'ptquynh@gmail.com',
                      '0827788990',
                      'Đề xuất thay đổi vị trí của quảng cáo gần trường học để tránh gây xao lãng cho học sinh và tăng cường an toàn giao thông.',
                      '',
                      '',
                      '2023-09-18',
                      1,
                      'Liên hệ với công ty quảng cáo, thảo luận về việc thay đổi vị trí quảng cáo gần trường học để tăng cường an toàn và tránh gây xao lãng.',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      24,
                      '',
                      null,
                      21,
                      2,
                      'Phạm Đức Hải',
                      'pdhai@gmail.com',
                      '0745566778',
                      'Xin phép đăng ký quảng cáo về triển lãm nghệ thuật vào cuối tháng này.',
                      '',
                      '',
                      '2023-09-22',
                      0,
                      '',
                      'Đăng ký nội dung',
                      'Bến Thành'
                    ],
                    [
                      18,
                      '',
                      null,
                      18,
                      3,
                      'Đinh Minh Tâm',
                      'dmtam@gmail.com',
                      '0818899001',
                      'Đề xuất tạo quy định rõ ràng về kích thước quảng cáo tại trung tâm thương mại để giữ gìn vẻ đẹp của thành phố.',
                      '',
                      '',
                      '2023-10-08',
                      0,
                      '',
                      'Đóng góp ý kiến',
                      'Bến Thành'
                    ],
                    [
                      4,
                      'ncluan21@clc.fitus.edu.vn',
                      1,
                      22,
                      4,
                      'Lê Minh Tuấn',
                      'lmtuan@gmail.com',
                      '0934567890',
                      'Tôi có một câu hỏi liên quan đến việc đăng ký quảng cáo. Làm thế nào để tôi có thể thay đổi hình ảnh và thông tin trên quảng cáo của mình? Mong nhận được sự hỗ trợ.',
                      '',
                      '',
                      '2023-08-23',
                      1,
                      'Hướng dẫn người dùng cách thay đổi thông tin và hình ảnh trên quảng cáo của họ. Cung cấp hỗ trợ kỹ thuật hoặc liên hệ công ty quảng cáo nếu cần.',
                      'Giải đáp thắc mắc',
                      'Bến Nghé'
                    ],
                    [
                      8,
                      '',
                      null,
                      8,
                      4,
                      'Nguyễn Văn Hoàng',
                      'nvh@gmail.com',
                      '0978901234',
                      'Cần thông tin về các sự kiện nghệ thuật và văn hóa diễn ra trong tháng tại khu vực này. Xin hãy cung cấp lịch trình và địa điểm để thuận tiện tham gia.',
                      '',
                      '',
                      '2023-09-15',
                      0,
                      '',
                      'Giải đáp thắc mắc',
                      'Bến Thành'
                    ],
                    [
                      15,
                      'nthphuc21@clc.fitus.edu.vn',
                      1,
                      1,
                      4,
                      'Nguyễn Thị Thanh Nga',
                      'nttn@gmail.com',
                      '0845566778',
                      'Cần biết rõ về quy định liên quan đến việc treo bảng quảng cáo tại các khu dân cư. Xin cung cấp thông tin chi tiết để hiểu rõ hơn.',
                      '',
                      '',
                      '2023-08-14',
                      1,
                      'Gửi tài liệu chính thức về quy định liên quan đến việc treo bảng quảng cáo tại khu dân cư, bao gồm các hướng dẫn cụ thể.',
                      'Giải đáp thắc mắc',
                      'Bến Thành'
                    ],
                    [
                      19,
                      '',
                      null,
                      22,
                      4,
                      'Trần Thị Quỳnh Trang',
                      'ttqtrang@gmail.com',
                      '0809900112',
                      'Tôi muốn biết về quy định cụ thể liên quan đến việc đặt bảng quảng cáo tại các cửa hàng nhỏ trong khu vực dân cư. Xin thông tin chi tiết về kích thước, hình dạng, và các bước đăng ký.',
                      '',
                      '',
                      '2023-08-31',
                      0,
                      '',
                      'Giải đáp thắc mắc',
                      'Bến Nghé'
                    ]
                  ]

                const QuanLocReport = [
                    [
                      1,
                      '',
                      null,
                      10.7762,
                      106.699,
                      1,
                      'Trần Thị Hương Giang',
                      'thgiang@gmail.com',
                      '0901122334',
                      'Tôi phát hiện một quảng cáo không hợp pháp tại địa chỉ này. Xin kiểm tra và loại bỏ nó khỏi trang web của bạn.',
                      '',
                      '',
                      '2023-08-05',
                      0,
                      '',
                      2,
                      'Tố giác sai phạm',
                      'Bến Thành',
                      "131 Nam Kỳ Khởi Nghĩa"
                    ],
                    [
                      2,
                      'nthphuc21@clc.fitus.edu.vn',
                      1,
                      10.7751,
                      106.7,
                      4,
                      'Lê Văn Đức',
                      'lvduc@gmail.com',
                      '0934567890',
                      'Tôi muốn đăng ký quảng cáo tại đây. Xin hướng dẫn tôi qua quy trình đăng ký và các bước cần thực hiện để quảng cáo của tôi xuất hiện trên bản đồ.',
                      '',
                      '',
                      '2023-08-12',
                      1,
                      'Để đăng ký quảng cáo, vui lòng truy cập trang chính thức của chúng tôi và làm theo hướng dẫn đăng ký. Nếu gặp vấn đề, liên hệ với bộ phận hỗ trợ.',
                      1,
                      'Giải đáp thắc mắc',
                      'Bến Nghé',
                      "103 Lê Thánh Tôn"
                    ],
                    [
                      3,
                      '',
                      null,
                      10.7775,
                      106.699,
                      1,
                      'Nguyễn Thị Mai Anh',
                      'ntmanh@gmail.com',
                      '0987654321',
                      'Bản đồ hiển thị địa chỉ không chính xác. Đề nghị cập nhật để tránh nhầm lẫn từ người dùng.',
                      '',
                      '',
                      '2023-08-17',
                      0,
                      '',
                      1,
                      'Tố giác sai phạm',
                      'Bến Nghé',
                      "95 Pasteur"
                    ],
                    [
                      7,
                      '',
                      null,
                      10.9448,
                      106.818,
                      1,
                      'Đỗ Thị Thanh Thảo',
                      'dtthao@gmail.com',
                      '0921122334',
                      'Địa điểm có gắn quảng cáo trái phép, chưa đăng ký hợp pháp',
                      '',
                      '',
                      '2023-09-08',
                      0,
                      '',
                      5,
                      'Tố giác sai phạm',
                      'Cô Giang',
                      "51 Hồ Hảo Hớn"
                    ]
                  ]


                localStorage.setItem('ads_create', JSON.stringify(QuanAdsCreate));
                localStorage.setItem('ads_report', JSON.stringify(QuanAdsReport));
                localStorage.setItem('ads_loc_report', JSON.stringify(QuanAdsLocReport));
                localStorage.setItem('loc_report', JSON.stringify(QuanLocReport));
                
            }
                
            if (email == "phuong@gmail.com"){
                localStorage.setItem('role', '2');
                localStorage.setItem('email', email);
                let ads_create = [
                    [1, 'nnlien21@clc.fitus.edu.vn', 1,	10,	5, 8.12, 1.23, 1, 'Vẻ đẹp tự nhiên trong từng món trang sức. Khám phá sự quý phái tại chúng tôi.', 'image1.png', 'Công ty TNHH Vàng Bạc Đá Quý', 'contact@vangbacdaquy.com', '0912345678', '123 Điện Biên Phủ, Phường 7, Quận 3', '2023-08-05', '2023-12-01', 0],
                    [2, 'nthphuc21@clc.fitus.edu.vn', 2, 5,	3, 3.76, 3.78, 1, 'Hương vị tươi mới từ nông trại đến bát. Sự tươi mới trong mỗi khẩu phần.', 'image2.png',	'FreshHarvest Foods', 'info@freshharvestfoods.com',	'0712345678', '56 Cao Thắng, Phường 4, Quận 3', '2023-08-10',	'2023-12-05', 1],
                    [3, 'pmlinh21@clc.fitus.edu.vn', 1,	20,	8, 11.23, 5.42,	3, 'Xây dựng ước mơ của bạn. Chất lượng đến từng chi tiết.', 'image3.png', 'Công ty Xây dựng Tiến Đạt', 'info@tiendatconstruction.vn', '0123456789', '789 Lê Văn Sỹ, Phường 2, Quận Tân Bình', '2023-08-15',	'2023-12-11', 1],
                    [4, 'ncluan21@clc.fitus.edu.vn', 2,	25,	2, 7.49, 2.95, 1, 'Chúng tôi tạo ra giải pháp công nghệ tương lai tại BlueSky Tech Solutions. Từ phần mềm đến phần cứng, chúng tôi đưa bạn đến gần hơn với tương lai kỹ thuật số. Hãy mở cánh cửa của sự đổi mới với chúng tôi!', '', 'BlueSky Tech Solutions', 'info@blueskytechsolutions.com', '0976543210', '15 Đinh Công Tráng, Phường Tân Định, Quận 1', '2023-09-01', '2023-12-15', 0],
                    [5, 'nnlien21@clc.fitus.edu.vn', 2,	22,	7, 9.88, 4.67, 4, 'Hương vị tinh tế từ bếp đến bát. Đẳng cấp trong từng giọt mồ hôi.', '', 'Công ty Thực phẩm Hương Thảo', 'info@huongthaofoods.com', '0776543210', '222 Hùng Vương, Phường 9, Quận 5',	'2023-09-07', '2023-12-20', 1],
                    [6, 'nnlien21@clc.fitus.edu.vn', 1,	21,	1, 5.34, 6.11, 1, 'Sáng tạo không gian xanh. Thiên nhiên sống động trong lòng thành phố.', 'image2.png', 'EverGreen Landscapes', 'info@evergreenlandscapes.com', '0145678901', '432 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1', '2023-09-14', '2023-12-24', 0],
                    [7, 'nthphuc21@clc.fitus.edu.vn', 1, 10, 6,	13.01, 9.86, 1,	'Ở đằng sau mỗi ứng dụng tuyệt vời là một đội ngũ sáng tạo. Công ty Công nghệ Phần mềm Sáng Tạo chú trọng vào việc phát triển các ứng dụng và phần mềm độc đáo, giúp bạn kết nối và làm việc hiệu quả hơn.', '', 'Công ty Công nghệ Phần mềm Sáng Tạ', 'info@sangtaosoftware.vn', '0932104765', '76 Lê Lai, Phường Bến Thành, Quận 1',	'2023-09-22', '2023-12-30', 0],
                    [8, 'pmlinh21@clc.fitus.edu.vn', 2,	7, 9, 10.65, 8.33, 2, 'Gửi hàng đến mọi nơi. An toàn, đồng hành đáng tin cậy.', 'image1.png', 'OceanWave Logistics', 'info@oceanwavelogistics.com', '0732104765', '321 Võ Văn Tần, Phường 5, Quận 3', '2023-10-02', '2024-01-03', 1],
                    [9, 'pmlinh21@clc.fitus.edu.vn', 1,	15,	10,	2.97, 10.75, 1,	'Sức khỏe không giới hạn. Chăm sóc sức khỏe tại đỉnh.', 'image1.png', 'Công ty Y tế Hoàn Hảo', 'info@hoanhaohealthcare.com',	'0112233445', '99 Trần Quang Diệu, Phường 14, Quận 3', '2023-10-09',	'2024-01-08', 1],
                    [10, 'ncluan21@clc.fitus.edu.vn', 2,	9, 4, 12.45, 7.19, 1, 'Nắng là nguồn năng lượng vô tận, và chúng tôi biến nó thành điện. Với công nghệ tiên tiến và lòng đam mê bền vững, chúng tôi giúp bạn tiết kiệm năng lượng và giữ cho hành tinh của chúng ta xanh sạch hơn.', '', 'GoldenSun Solar Energy', 'info@goldensunsolarenergy.com', '0943216547', '666 Nguyễn Đình Chính, Phường 11, Quận Phú Nhuận', '2023-10-15', '2024-01-14', 0],
                    [11, 'nnlien21@clc.fitus.edu.vn', 1,	14,	2, 6.78, 11.24,	1,	'Hỗ Trợ Cộng Đồng, Xây Dựng Tương Lai! Chúng tôi đầu tư vào các dự án xã hội để tạo ra những thay đổi tích cực trong cuộc sống hàng ngày của bạn.', 'image1.png', 'Công ty Du lịch Phong Cảnh Đẹp', 'info@phongcachdeptravel.com',	'0743216547', '444 Lê Quang Định, Phường 11, Quận Bình Thạnh', '2023-10-22', '2024-01-18', 0],
                    [12, 'nthphuc21@clc.fitus.edu.vn', 1, 21, 7,	14.20, 12.68, 2, 'Quản lý tài chính, xây dựng tương lai. Đối tác tài chính đáng tin cậy.', 'image4.png', 'SilverLine Financial Services', 'info@silverlinefinancials.com', '0134567890', '777 Phan Xích Long, Phường 3, Quận Phú Nhuận', '2023-11-01',	'2024-01-23', 1],
                    [13, 'ncluan21@clc.fitus.edu.vn', 2,	20,	1, 1.54, 13.91,	3, 'Nội thất độc đáo, phản ánh cá nhân. Không gian sống đẳng cấp.', '', 'Công ty Trang trí Nội thất Mỹ Ngọc',	'info@myngocinteriors.com',	'0965432101', '101 Hoàng Sa, Phường Đa Kao, Quận 1', '2023-11-08', '2024-01-27', 1],
                    [14, 'nnlien21@clc.fitus.edu.vn', 1,	19,	6, 4.89, 14.54,	1, 'Đóng gói thân thiện với môi trường. Bảo vệ hành tinh, bắt đầu từ chiếc hộp.', 'image5.png', 'EcoFriendly Packaging Co.',	'info@ecofriendlypackagingco.com', '0765432101', '888 Cách Mạng Tháng Tám, Phường 15, Quận 10', '2023-11-15', '2024-02-02', 0],
                    [15, 'nthphuc21@clc.fitus.edu.vn', 1, 18, 8,	15.00, 6.78, 1,	'Học ngoại ngữ, mở cánh cửa thế giới. Giáo viên chất lượng, học viên tự tin.', '', 'Công ty Đào tạo Ngoại ngữ Quốc tế', 'info@quocnuguageschool.com', '0156789012', '222 Lê Thị Riêng, Phường Bến Thành, Quận 1',	'2023-11-21', '2024-02-06', 1],
                    [16, 'nnlien21@clc.fitus.edu.vn', 1,	17, 10,	9.33, 9.11,	2, 'Kiến trúc đẳng cấp, không gian độc đáo. Biến ý tưởng thành hiện thực.', 'image1.png', 'RedStone Architecture & Design', 'info@redstonead.com', '0998765432', '555 Nguyễn Đình Chính, Phường 8, Quận Phú Nhuận', '2023-12-03', '2024-02-11', 1],
                    [17, 'pmlinh21@clc.fitus.edu.vn', 2,	12,	9, 3.21, 10.43,	1, 'Đồ chơi sáng tạo, tương tác thông minh. Nụ cười và học hỏi trong mỗi chiếc đồ chơi.', '', 'Công ty Sản xuất Đồ chơi Sáng Tạo', 'info@creativetoymanufacturing.com', '0798765432', '111 Điện Biên Phủ, Phường Đa Kao, Quận 1', '2023-12-11', '2024-02-15', 0],
                    [18, 'ncluan21@clc.fitus.edu.vn', 1,	11,	5, 6.75, 3.57, 1, 'Giải pháp IT tiên tiến. Kết nối kỹ thuật số, tương lai không giới hạn.', 'image6.png', 'TechVista IT Solutions', 'info@techvistaitsolutions.com', '0187654321', '999 Phan Đình Phùng, Phường 2, Quận Phú Nhuận', '2023-12-18', '2024-02-20', 0],
                    [19, 'pmlinh21@clc.fitus.edu.vn', 2,	3, 3, 11.98, 2.89, 1, 'Thể thao đỉnh cao, niềm vui không ngừng. Thiết bị chất lượng, niềm đam mê không giới hạn.', '', 'Công ty Thể thao Đỉnh Cao', 'info@dinhhaothethao.vn', '0911112222',	'666 Cách Mạng Tháng Tám, Phường 6, Quận Tân Bình', '2023-12-24', '2024-02-24', 1],
                    [20, 'nnlien21@clc.fitus.edu.vn', 1,	16,	4, 2.36, 8.01, 1, 'Hoa tươi độc đáo, tinh tế. Biến mọi dịp trở nên đặc biệt với vẻ đẹp của chúng tôi.', '', 'PurplePetal Floral Design', 'info@purplepetalfloraldesign.com',	'0711112222', '333 Phan Xích Long, Phường 7, Quận Phú Nhuận', '2023-12-30', '2024-03-01', 1]
                ];
                localStorage.setItem('ads_create', JSON.stringify(ads_create));
    
                let ads_report = [
                    [1, 'nnlien21@clc.fitus.edu.vn', 1, 1, 1, 'Nguyễn Văn Anh', 'nvanh@gmail.com', '0912345678', 'Biển quảng cáo hiển thị thông điệp chính trị không liên quan đến khu vực này. Mong muốn chính quyền địa phương kiểm tra và đảm bảo rằng quảng cáo trên đường không vi phạm các quy định liên quan.', 'image1.png', 'image2.png', "2023-08-05 00:00:00", 1, 'Kiểm tra thông tin quảng cáo và yêu cầu loại bỏ thông điệp không liên quan. Đảm bảo quảng cáo tuân thủ luật lệ và không gây phiền hà cho cộng đồng.'],
                    [2, 'nthphuc21@clc.fitus.edu.vn', 2, 2,	1, 'Lê Thị Bình', 'ltb@gmail.com', '0923456789', 'Biển quảng cáo chính trị chứa thông điệp không chính xác về chính sách công cộng. Mong muốn chính trị gia hoặc tổ chức liên quan xem xét và điều chỉnh nội dung quảng cáo để tránh thông tin không đúng.', 'image2.png', 'image3.png', "2023-08-12 00:00:00", 1, 'Liên hệ chính trị gia hoặc tổ chức chính trị liên quan và yêu cầu sửa đổi thông điệp không chính xác. Đảm bảo quảng cáo không truyền đạt thông tin sai lệch về chính sách công cộng.'],
                    [3, 'pmlinh21@clc.fitus.edu.vn', 2,	5, 2, 'Trần Minh Châu',	'tmc@gmail.com', '0976543210', 'Quảng cáo sản phẩm không có thông tin liên hệ hoặc địa chỉ cửa hàng. Mong muốn doanh nghiệp cung cấp thông tin liên lạc để người dùng có thể tìm thấy cửa hàng dễ dàng hơn.', 'image4.png', 'image1.png', "2023-08-17 00:00:00", 1, 'Liên hệ doanh nghiệp để yêu cầu cung cấp thông tin liên hệ và địa chỉ cửa hàng. Đảm bảo rằng quảng cáo chứa thông tin đầy đủ để người dùng dễ dàng liên hệ và đến cửa hàng.'],
                    [4, '', null, 21, 3, 'Phạm Thị Dung', 'ptdung@gmail.com', '0932123456', 'Quảng cáo về chiến dịch xã hội hóa thiếu minh bạch về việc quyên góp và cách thức sử dụng các quỹ được huy động. Mong muốn có thêm thông tin về cách mà quỹ sẽ được sử dụng để hỗ trợ cộng đồng.', 'image1.png', 'image5.png',	"2023-08-23 00:00:00", 0, ''],
                    [5, 'nnlien21@clc.fitus.edu.vn', 2,	9, 4, 'Hoàng Đức Em', 'hdem@gmail.com',	'0798765432', 'Quảng cáo có chứa thông tin không rõ ràng về ưu đãi hoặc giảm giá. Mong muốn nhận được giải đáp thắc mắc về các điều kiện và điều khoản của ưu đãi được quảng cáo để tránh nhầm lẫn khi mua hàng.', '', '',	"2023-08-28 00:00:00", 1, 'Liên hệ doanh nghiệp để yêu cầu giải đáp thắc mắc của người tiêu dùng. Đảm bảo thông tin chi tiết và rõ ràng về sản phẩm hoặc dịch vụ để tránh hiểu lầm.'],
                    [6, 'nnlien21@clc.fitus.edu.vn', 1,	10,	2, 'Võ Thị Hà',	'vtha@gmail.com', '0712345678',	'Quảng cáo về chiến dịch xã hội hóa cần thêm thông tin về các hoạt động và dự án cụ thể được hỗ trợ. Mong muốn có thông tin chi tiết để hiểu rõ về tác động của việc quyên góp.', '', '', "2023-09-02 00:00:00", 1, 'Liên hệ chính trị gia hoặc tổ chức chính trị liên quan và yêu cầu sửa đổi thông điệp không chính xác. Đảm bảo quảng cáo không truyền đạt thông tin sai lệch về chính sách công cộng.'],
                    [7, '', null, 22, 3, 'Đinh Minh Hiếu', 'dmhieu@gmail.com', '0776543210', 'Quảng cáo không truyền đạt được ưu điểm đặc biệt của sản phẩm hoặc dịch vụ. Mong muốn doanh nghiệp xem xét việc tăng cường thông tin để người tiêu dùng hiểu rõ về giá trị của sản phẩm.', 'image1.png', '', "2023-09-08 00:00:00", 0, ''],
                    [8, 'pmlinh21@clc.fitus.edu.vn', 1,	14,	4, 'Nguyễn Thị Khánh', 'ntkt@gmail.com', '0123456789', 'Quảng cáo có chứa thông tin không rõ ràng về các sản phẩm hoặc dịch vụ. Mong muốn nhận được giải đáp thắc mắc về tính năng và đặc điểm chi tiết của sản phẩm để quyết định mua hàng được hiệu quả hơn.', '', '', "2023-09-15 00:00:00", 1, 'Liên hệ doanh nghiệp để yêu cầu giải đáp thắc mắc của người tiêu dùng. Đảm bảo rằng mọi thông tin về sản phẩm hoặc dịch vụ được truyền đạt rõ ràng và chi tiết để tránh nhầm lẫn'],
                    [9, 'pmlinh21@clc.fitus.edu.vn', 2, 19,	1, 'Lý Văn Long', 'lylong@gmail.com', '0987654321',	'Nhận thức về biển quảng cáo chính trị trên đường. Nội dung không chính xác, thiên hướng chống đối một đảng. Đề nghị kiểm tra thông tin và đảm bảo công bằng trong quảng cáo.', '', '', "2023-09-21 00:00:00", 1, 'Kiểm tra và xác minh thông tin quảng cáo. Nếu phát hiện không chính xác, yêu cầu rút quảng cáo và yêu cầu thông tin chính xác từ người đăng.'],
                    [10, '', null, 17, 2, 'Trần Thị Mai', 'ttmai@gmail.com', '0943210765', 'Ghi nhận quảng cáo chính trị với thông tin đầy đủ. Mong muốn biết rõ về nội dung, nguồn gốc và mục tiêu của quảng cáo để hiểu rõ hơn về các chủ đề chính trị đang được thảo luận.', 'image1.png', '', "2023-09-26 00:00:00", 0, ''],
                    [11, '', null, 3, 3, 'Bùi Văn Nam', 'bvn@gmail.com', '0798234567', 'Nhìn thấy quảng cáo sản phẩm mới. Đề xuất thêm thông tin về giá cả và cách sử dụng sản phẩm. Cảm thấy quan tâm và muốn biết thêm để đưa ra quyết định mua hàng.', 'image2.png', 'image6.png', "2023-10-02 00:00:00", 0, ''],
                    [12, '', null, 17, 4, 'Phan Thị Oanh', 'ptoanh@gmail.com', '0732123456', 'Quảng cáo một dịch vụ giải quyết vấn đề y tế. Đề xuất cung cấp thông tin chi tiết về cách dịch vụ hoạt động và chi phí liên quan. Đây là một vấn đề quan trọng, nên cần thông tin đầy đủ để đưa ra quyết định.', '', '', "2023-10-09 00:00:00", 0, ''],
                    [13, '', null, 15, 3, 'Trịnh Văn Phúc', 'tvphuc@gmail.com', '0976543021', 'Tôi đề xuất thêm thông tin về mục tiêu và lợi ích của chương trình xã hội hóa này để người dân hiểu rõ hơn về mục đích của hoạt động này.', '', '', "2023-10-15 00:00:00", 0, ''],
                    [14, '', null, 11, 1, 'Đỗ Thị Quỳnh', 'dtquynh@gmail.com', '0921765432', 'Phát hiện quảng cáo xã hội hóa với thông tin không chính xác về việc hỗ trợ cộng đồng. Đề xuất kiểm tra và xác nhận các dự án xã hội để đảm bảo sự minh bạch và trung thực.', '', '', "2023-10-21 00:00:00", 0, ''],
                    [15, '', null, 7, 2, 'Nguyễn Minh Quân', 'nmquan@gmail.com', '0712987654', 'Nhìn thấy quảng cáo về chương trình xã hội hóa giúp trẻ em. Đề xuất cung cấp thông tin chi tiết về dự án, cách đóng góp và cách giúp đỡ để người dân có thể tham gia tích cực.', '', '', "2023-08-14 00:00:00", 0, ''],
                    [16, 'nnlien21@clc.fitus.edu.vn', 1,	21,	3, 'Lê Văn Sơn', 'lson@gmail.com', '0123567890', 'Thấy quảng cáo liên quan đến chính sách giáo dục. Gợi ý thêm thông tin về cách áp dụng chính sách và cách hỗ trợ học sinh và giáo viên để tăng cường chất lượng giáo dục.', '', '', "2023-09-03 00:00:00", 1, 'Ghi chép ý kiến liên quan đến chính sách giáo dục. Chuyển ý kiến đến cấp quản lý để xem xét và áp dụng các đề xuất tích cực vào chính sách hiện tại.'],
                    [17, 'pmlinh21@clc.fitus.edu.vn', 1,	23,	4, 'Hồ Thị Thảo', 'htthao@gmail.com', '0798987654',	'Quảng cáo về sản phẩm công nghệ mới. Đề xuất cung cấp thông tin về tính năng, hiệu suất và hỗ trợ kỹ thuật để người tiêu dùng có thể đưa ra quyết định mua hàng.', '', '', "2023-09-18 00:00:00", 1, 'Cung cấp thông tin chi tiết về sản phẩm công nghệ mới. Hỗ trợ khách hàng giải quyết thắc mắc về tính năng và giá cả để họ có thể đưa ra quyết định mua hàng.'],
                    [18, 'ncluan21@clc.fitus.edu.vn', 1,	1, 1, 'Mai Văn Tiến', 'mvtien@gmail.com', '0912765432',	'Tôi nhận thấy một biển quảng cáo chính trị trên đường với nội dung không chính xác. Biển này chứa thông tin sai lệch về ứng cử viên và chính sách, cần được kiểm tra và sửa chữa.', '', '', "2023-10-08 00:00:00", 1, 'Kiểm tra thông tin và yêu cầu chỉnh sửa ngay lập tức.'],
                    [19, 'pmlinh21@clc.fitus.edu.vn', 1,	20,	2, 'Vũ Thị Uyên', 'vtuyen@gmail.com', '0776543890',	'Biển quảng cáo chính trị này cần phải đăng ký nội dung để đảm bảo tính chính xác và minh bạch của thông điệp được truyền đạt.', '', '', "2023-08-31 00:00:00", 1, 'Liên hệ với chủ quảng cáo, yêu cầu đăng ký ngay.'],
                    [20, 'nnlien21@clc.fitus.edu.vn', 2,	6, 3, 'Nguyễn Minh Vương', 'nmvuong@gmail.com',	'0932123456', 'Tôi muốn đóng góp ý kiến về nội dung của biển quảng cáo chính trị này. Đề xuất cung cấp thông tin chi tiết hơn về chính sách và kế hoạch cụ thể của ứng cử viên để người dân hiểu rõ hơn.', '', '', "2023-10-03 00:00:00", 1, 'Ghi nhận ý kiến, đề xuất yêu cầu thêm thông tin chi tiết.'],
                    [21, '', null, 4, 1, 'Trần Thị Xuân', 'ttxuan@gmail.com', '0712654321', 'Biển quảng cáo thương mại này có vẻ chứa thông tin không chính xác về sản phẩm. Đề nghị kiểm tra và chỉnh sửa thông tin để tránh gây hiểu lầm cho người tiêu dùng.', '', '', "2023-09-01 00:00:00", 0, ''],
                    [22, '', null, 14, 2, 'Phan Thanh Yến', 'ptyen@gmail.com', '0923456701', 'Biển quảng cáo này cần được đăng ký nội dung để đảm bảo tính minh bạch và tuân thủ các quy định về quảng cáo thương mại.', '', '', "2023-09-07 00:00:00", 0, ''],
                    [23, 'ncluan21@clc.fitus.edu.vn', 2,	17,	4, 'Lưu Thị Ánh', 'lanh@gmail.com',	'0123123456', 'Tôi có một số thắc mắc về sản phẩm được quảng cáo. Đề xuất cung cấp thông tin liên hệ hoặc website để tôi có thể tìm hiểu thêm về sản phẩm này.', '', '', "2023-09-14 00:00:00", 1, 'Cung cấp thông tin liên hệ chính thức để giải quyết thắc mắc.'],
                    [24, 'pmlinh21@clc.fitus.edu.vn', 1,	1, 1, 'Đinh Văn Đức', 'dvduc@gmail.com', '0798765432', 'Biển quảng cáo xã hội hóa này chứa thông tin không chính xác về tổ chức hoặc sự kiện. Đề nghị kiểm tra và sửa chữa để tránh gây hiểu lầm cho cộng đồng.', '', '', "2023-09-22 00:00:00", 1, 'Thực hiện kiểm tra thông tin và yêu cầu chỉnh sửa ngay.'],
                    [25, 'nnlien21@clc.fitus.edu.vn', 2,	17,	2, 'Nguyễn Thị Hoài', 'nthoai@gmail.com', '0712765432',	'Biển quảng cáo này cần được đăng ký nội dung để đảm bảo tính minh bạch và tránh vi phạm các quy định về quảng cáo xã hội hóa.', '', '', "2023-10-02 00:00:00", 1, 'Liên hệ với tổ chức, yêu cầu đăng ký nội dung ngay lập tức.']
                ];
                localStorage.setItem('ads_report', JSON.stringify(ads_report));
    
                let ads_loc_report = [
                    [1, '', null, 20, 1, 'Nguyễn Thị Lan Anh', 'ntlananh@gmail.com', '0901234567', 'Tôi nhận thấy có một quảng cáo không liên quan tại đây. Mong sở kiểm tra và loại bỏ quảng cáo này để giữ cho bản đồ chất lượng hơn.', '', '', "2023-08-05 00:00:00", 0, ''],
                    [2, 'nthphuc21@clc.fitus.edu.vn', 1, 10, 2, 'Trần Văn Tuấn', 'tvtuan@gmail.com', '0912345678', 'Tôi muốn đăng ký quảng cáo cho cửa hàng của mình tại đây. Xin vui lòng liên hệ để biết thêm thông tin và xác nhận việc đăng ký.', '', '', "2023-08-12 00:00:00", 1, 'Xác nhận thông tin và yêu cầu hình ảnh của quảng cáo. Hỗ trợ chủ quảng cáo cập nhật thông tin và hình ảnh theo yêu cầu.'],
                    [3, '', null,	25, 3, 'Phạm Thị Hồng',	'pthong@gmail.com',	'0923456789', 'Tôi nghĩ rằng việc thêm một tính năng tìm kiếm địa điểm trên trang web sẽ giúp người dùng tìm thấy thông tin nhanh chóng hơn. Đây là một gợi ý để cải thiện trải nghiệm người dùng.', '', '', "2023-08-17 00:00:00", 0, ''],
                    [4, 'ncluan21@clc.fitus.edu.vn', 1,	22,	4, 'Lê Minh Tuấn', 'lmtuan@gmail.com', '0934567890', 'Tôi có một câu hỏi liên quan đến việc đăng ký quảng cáo. Làm thế nào để tôi có thể thay đổi hình ảnh và thông tin trên quảng cáo của mình? Mong nhận được sự hỗ trợ.', '', '', "2023-08-23 00:00:00", 1, 'Hướng dẫn người dùng cách thay đổi thông tin và hình ảnh trên quảng cáo của họ. Cung cấp hỗ trợ kỹ thuật hoặc liên hệ công ty quảng cáo nếu cần.'],
                    [5, 'nnlien21@clc.fitus.edu.vn', 2,	24, 1, 'Võ Ngọc Mai', 'vnmai@gmail.com', '0945678901', 'Tôi phát hiện một quảng cáo không hợp lý tại khu vực công cộng gần công viên. Xin hãy kiểm tra và loại bỏ quảng cáo này để bảo vệ vẻ đẹp của khu vực công cộng này.', 'image1.png', 'image2.png', "2023-08-28 00:00:00", 1, 'Xác minh và loại bỏ quảng cáo không phù hợp gần công viên. Thông báo việc xử lý này cho người báo cáo để họ biết rằng vấn đề đã được giải quyết.'],
                    [6, '', null,	21,	1, 'Hoàng Đức Long', 'hdl@gmail.com', '0956789012', 'Phát hiện quảng cáo không phù hợp trên bảng quảng cáo công cộng. Mong muốn công việc kiểm tra và xử lý để duy trì trật tự và vẻ đẹp của khu vực.', 'image1.png', '', "2023-09-02 00:00:00", 0, ''],
                    [7, '', null, 16, 3,	'Bùi Thị Thu Hà', 'btth@gmail.com',	'0967890123', 'Góp ý về việc cải thiện dịch vụ wifi công cộng. Sự cải thiện này sẽ giúp tăng cường tiện ích cho người dân và du khách.', '', '', "2023-09-08 00:00:00", 0, ''],
                    [8, '', null,	8, 4, 'Nguyễn Văn Hoàng', 'nvh@gmail.com',	'0978901234', 'Cần thông tin về các sự kiện nghệ thuật và văn hóa diễn ra trong tháng tại khu vực này. Xin hãy cung cấp lịch trình và địa điểm để thuận tiện tham gia.', '', '', "2023-09-15 00:00:00", 0, ''],
                    [9, '', null, 3, 2, 'Đặng Quang Minh', 'dqminh@gmail.com', '0989012345', 'Cần đăng ký quảng cáo cho sự kiện tại địa điểm công cộng trong tuần tới. Rất mong nhận được hướng dẫn về thủ tục và yêu cầu cần thiết.', '', '', "2023-09-21 00:00:00", 0, ''],
                    [10, '', null,	10,	2, 'Lê Thị Ngọc Trâm', 'ltntram@gmail.com',	'0990123456', 'Muốn đăng ký quảng cáo cho sự kiện tại địa điểm công cộng.', '', '', "2023-09-26 00:00:00", 0, ''],
                    [11, '', null,	17, 4, 'Trần Thanh Hải', 'tthai@gmail.com',	'0881122334', 'Biển quảng cáo gần khu vực chợ không rõ ràng về giá cả sản phẩm. Mong muốn có thông tin giải đáp để người tiêu dùng hiểu rõ hơn.', '', '', "2023-10-02 00:00:00", 0, ''],
                    [12, 'nthphuc21@clc.fitus.edu.vn', 2, 6, 1,	'Mai Thị Phương', 'mtphuong@gmail.com', '0872233445', 'Tôi báo cáo một biển quảng cáo gần công viên với hình ảnh không phù hợp, vi phạm chuẩn mực đạo đức.', '', '', "2023-10-09 00:00:00", 1, 'Liên hệ công ty quảng cáo, đòi hỏi thay đổi hình ảnh không phù hợp ngay lập tức và kiểm tra tuân thủ các nguyên tắc đạo đức.'],
                    [13, '', null, 11,	3, 'Vũ Thị Thu Hường', 'vtthuong@gmail.com', '0863344556', 'Tôi đề xuất thêm biển chỉ dẫn đến các trung tâm y tế gần những điểm quảng cáo để cung cấp hướng dẫn hữu ích cho người dân.', '', '', "2023-10-15 00:00:00", 0, ''],
                    [14, 'nnlien21@clc.fitus.edu.vn', 1,	18,	2, 'Hoàng Văn Thắng', 'hvthang@gmail.com', '0854455667', 'Biển quảng cáo chứa thông tin không chính xác về một sự kiện sắp tới. Mong được sửa chữa.', '', '', "2023-10-21 00:00:00", 1, 'Thông báo lỗi đến công ty quảng cáo, yêu cầu cập nhật thông tin chính xác về sự kiện và theo dõi việc điều chỉnh.'],
                    [15, 'nthphuc21@clc.fitus.edu.vn', 1, 1,	4, 'Nguyễn Thị Thanh Nga', 'nttn@gmail.com', '0845566778', 'Cần biết rõ về quy định liên quan đến việc treo bảng quảng cáo tại các khu dân cư. Xin cung cấp thông tin chi tiết để hiểu rõ hơn.', '', '', "2023-08-14 00:00:00", 1, 'Gửi tài liệu chính thức về quy định liên quan đến việc treo bảng quảng cáo tại khu dân cư, bao gồm các hướng dẫn cụ thể.'],
                    [16, 'nnlien21@clc.fitus.edu.vn', 2,	20,	1, 'Lê Văn Đức', 'lvduc@gmail.com',	'0836677889', 'Quảng cáo tại góc đường thiếu ánh sáng ban đêm, tạo ra tình trạng an toàn không tốt. Yêu cầu sửa chữa để tránh tai nạn giao thông.', '', '', "2023-09-03 00:00:00", 1, 'Gửi thông báo cho công ty quảng cáo, yêu cầu tăng cường ánh sáng xung quanh quảng cáo để đảm bảo an toàn giao thông.'],
                    [17, 'pmlinh21@clc.fitus.edu.vn', 1,	13,	2, 'Phan Thị Quỳnh', 'ptquynh@gmail.com', '0827788990', 'Đề xuất thay đổi vị trí của quảng cáo gần trường học để tránh gây xao lãng cho học sinh và tăng cường an toàn giao thông.', 'image4.png', '', "2023-09-18 00:00:00", 1, 'Liên hệ với công ty quảng cáo, thảo luận về việc thay đổi vị trí quảng cáo gần trường học để tăng cường an toàn và tránh gây xao lãng.'],
                    [18, '', null,	18, 3, 'Đinh Minh Tâm',	'dmtam@gmail.com', '0818899001', 'Đề xuất tạo quy định rõ ràng về kích thước quảng cáo tại trung tâm thương mại để giữ gìn vẻ đẹp của thành phố.', '', '', "2023-10-08 00:00:00", 0, ''],
                    [19, '', null,	22,	4, 'Trần Thị Quỳnh Trang', 'ttqtrang@gmail.com', '0809900112', 'Tôi muốn biết về quy định cụ thể liên quan đến việc đặt bảng quảng cáo tại các cửa hàng nhỏ trong khu vực dân cư. Xin thông tin chi tiết về kích thước, hình dạng, và các bước đăng ký.', '', '', "2023-08-31 00:00:00", 0, ''],
                    [20, 'nnlien21@clc.fitus.edu.vn', 1,	4, 1, 'Nguyễn Văn Hoa',	'nvnhoa@gmail.com',	'0781122334', 'Phát hiện quảng cáo không phù hợp về sản phẩm thức uống sô-cô-la gần trường học. Mong muốn kiểm tra và chuyển đổi thành quảng cáo thân thiện với trẻ em.', '', '', "2023-10-03 00:00:00", 1, 'Liên hệ công ty quảng cáo, yêu cầu điều chỉnh nội dung quảng cáo về sản phẩm thức uống sô-cô-la gần trường học theo hướng thân thiện với trẻ em.'],
                    [21, 'nnlien21@clc.fitus.edu.vn', 1,	25, 2, 'Lê Thị Bích Ngọc', 'ltbngoc@gmail.com',	'0772233445', 'Xin phép đăng ký quảng cáo về sự kiện thiền định. Rất mong được chấp thuận.', '', '', "2023-09-01 00:00:00", 1, 'Phê duyệt đơn đăng ký quảng cáo về sự kiện thiền định, gửi thông báo và hướng dẫn về việc thiết lập quảng cáo.'],
                    [22, '', null,	16,	1, 'Võ Minh Khánh',	'vmkhanh@gmail.com', '0763344556', 'Quảng cáo xấu hổ và không lành mạnh gần trường học, gây ảnh hưởng đến học sinh nhỏ tuổi.', '', '', "2023-09-07 00:00:00", 0, ''],
                    [23, '', null,	20,	1, 'Đỗ Thị Kim Ngân', 'dtkngan@gmail.com', '0754455667', 'Quảng cáo vi phạm văn hóa gần công viên, chứa hình ảnh không phù hợp với trẻ em và gia đình.', '', '', "2023-09-14 00:00:00", 0, ''],
                    [24, '', null,	21, 2, 'Phạm Đức Hải', 'pdhai@gmail.com', '0745566778',	'Xin phép đăng ký quảng cáo về triển lãm nghệ thuật vào cuối tháng này.', 'image2.png', '', "2023-09-22 00:00:00", 0, ''],
                    [25, 'nnlien21@clc.fitus.edu.vn', 2,	19,	3, 'Hoàng Thị Diệu Linh', 'htdlinh@gmail.com', '0736677889', 'Đề xuất cải thiện văn hóa giao thông bằng việc thiết lập các bảng chỉ dẫn giao thông rõ ràng và hợp lý trên các tuyến đường chính.', '', '', "2023-10-02 00:00:00", 1, 'Tổ chức cuộc họp với các cơ quan chức năng để đánh giá ý kiến đề xuất. Tiến hành thiết kế và lắp đặt bảng chỉ dẫn giao thông mới trên các tuyến đường chính, nhằm tăng cường an toàn và giảm ùn tắc giao thông. Cảm ơn người dân đã góp ý và thông báo về việc triển khai ý kiến đóng góp.']
                ];
                localStorage.setItem('ads_loc_report', JSON.stringify(ads_loc_report));
    
                let loc_report = [
                    [1, '', null, 10.7762, 106.699, "131 Nam Kỳ Khởi Nghĩa", 1, 'Trần Thị Hương Giang', 'thgiang@gmail.com', '0901122334', 'Tôi phát hiện một quảng cáo không hợp pháp tại địa chỉ này. Xin kiểm tra và loại bỏ nó khỏi trang web của bạn.', 'image1.png', 'image6.png', "2023-08-05 00:00:00", 0, '', 2],
                    [2, 'nthphuc21@clc.fitus.edu.vn', 1, 10.7751, 106.7, "103 Lê Thánh Tôn", 4, 'Lê Văn Đức', 'lvduc@gmail.com', '0934567890', 'Tôi muốn đăng ký quảng cáo tại đây. Xin hướng dẫn tôi qua quy trình đăng ký và các bước cần thực hiện để quảng cáo của tôi xuất hiện trên bản đồ.', '', '', "2023-08-12 00:00:00", 1, 'Để đăng ký quảng cáo, vui lòng truy cập trang chính thức của chúng tôi và làm theo hướng dẫn đăng ký. Nếu gặp vấn đề, liên hệ với bộ phận hỗ trợ.', 1],
                    [3, '', null,	10.7775, 106.699, "95 Pasteur", 1, 'Nguyễn Thị Mai Anh', 'ntmanh@gmail.com', '0987654321', 'Bản đồ hiển thị địa chỉ không chính xác. Đề nghị cập nhật để tránh nhầm lẫn từ người dùng.', '', '', "2023-08-17 00:00:00", 0, '', 1],
                    [4, '', null,	10.7809, 106.686, "46 Trương Định", 3, 'Bùi Minh Tuấn', 'bmtuan@gmail.com', '0912345678', 'Khu vực này có lượng người qua lại lớn. Tôi đề xuất thêm điểm quảng cáo để tăng hiển thị thông tin về cộng đồng và doanh nghiệp địa phương.', '', '', "2023-08-23 00:00:00", 0, '', 32],
                    [5, '', null,	10.7815, 106.687, "18A Tú Xương", 3, 'Hoàng Thị Lan Anh', 'htlanh@gmail.com', '0978877665', 'Khu vực này thường xuyên có trẻ em đi lại. Mong muốn các quảng cáo ở đây được thiết kế để phù hợp với độ tuổi của họ, giúp tạo ra một môi trường an toàn và thân thiện hơn.', '', '', "2023-08-28 00:00:00", 0, '', 32],
                    [6, 'nnlien21@clc.fitus.edu.vn', "280 Đ. Điện Biên Phủ", 2,	10.7787, 106.685, 4, 'Võ Văn Phúc', 'vvphuc@gmail.com', '0965123456', 'Ở đây có các bảng quảng cáo nhưng vì sao không có điểm đặt quảng cáo hiển thị trên bản đồ?', '', '', "2023-09-02 00:00:00", 1, 'Kiểm tra và xác nhận rằng điểm quảng cáo tại địa điểm này đã được thêm vào bản đồ. Cảm ơn người dân đã chú ý và báo cáo vấn đề này.', 32],
                    [7, '', null, 10.9448, 106.818,	"51 Hồ Hảo Hớn", 1, 'Đỗ Thị Thanh Thảo',	'dtthao@gmail.com', '0921122334', 'Địa điểm có gắn quảng cáo trái phép, chưa đăng ký hợp pháp', '', '', "2023-09-08 00:00:00", 0, '', 5]
                ];
                localStorage.setItem('loc_report', JSON.stringify(loc_report));
            }
            if (email == "so@gmail.com"){
                localStorage.setItem('role', '3');
                localStorage.setItem('email', email);
            }
            window.location.href = "/";
        }
        
    });

    $("a.forget-pass").on("click", function(){
      const email = $('#email').val();
      $(".login-form").hide()
      $(".user-icon").hide()

      if (email != "" && (email == "phuong@gmail.com" || email == "quan@gmail.com" || email == "so@gmail.com")){
        $('#email').val("");
        window.location.href = '/forget-pass?email=' + email;
      } else if (email != ""){
        $(".enter-email-form").show()
        $(".key-icon").show()
      } else if (email == "phuong@gmail.com" || email == "quan@gmail.com" || email == "so@gmail.com")
        alert("Email không được liên kết với bất cứ tài khoản nào")
    })

    $(".enter-email-form").on("click", " .style2-button", function(){
      $(".login-form").show()
      $(".user-icon").show()
      $(".enter-email-form ").hide()
      $(".key-icon").hide()
      $('#enter-email').val("")
    })

    $(".enter-email-form ").on("click", ".style1-button", function(){
      const email = $('#enter-email').val();
      if (email == "")
        alert ("Nhập email để thay đổi mật khẩu")
      else if ((email != "phuong@gmail.com" && email != "quan@gmail.com" && email != "so@gmail.com"))
        alert ("Email không được liên kết với bất cứ tài khoản nào")
      else{
        $('#enter-email').val("");
        window.location.href = '/forget-pass?email=' + email
      } 
    })
});