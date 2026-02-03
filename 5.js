let total = 0;
let success = 0;
let rejected = 0;
let pending = 0;

while (true) {

    let ask = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (ask === "không") {
        console.log("Kết thúc ca làm việc!");
        break;
    }

    if (ask !== "có") {
        console.log("Nhập sai! Vui lòng nhập lại (có/không)");
        continue;
    }

    // Nếu nhập "có" thì bắt đầu xử lý
    total++;

    // Nhập thông tin yêu cầu
    let authorName = prompt("Nhập tên bạn đọc:");
    let idBook = prompt("Nhập mã sách muốn đặt trước:");
    let bookName = prompt("Nhập tên sách:");

    let waitDays;
    do {
        waitDays = +prompt("Nhập số ngày dự kiến chờ (>=1):");
    } while (waitDays < 1);

    let priority = +prompt(`Nhập ưu tiên:
   1 = Sinh viên bình thường
2 = Giảng viên/Nghiên cứu sinh
3 = Nhân viên thư viện / Đặc cách`);

    // Xử lý theo đúng thứ tự ưu tiên đề bài

    if (waitDays > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        rejected++;

    } else if (priority === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        success++;

    } else if (priority === 2 && waitDays <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        success++;

    } else if (priority === 1 && waitDays <= 21) {
        console.log("Đặt trước thành công");
        success++;

    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        pending++;
    }
}

// Báo cáo cuối ca
console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý: " + total);
console.log("Số yêu cầu đặt thành công: " + success);
console.log("Số yêu cầu bị từ chối: " + rejected);
console.log("Số yêu cầu chờ xét duyệt: " + pending);
