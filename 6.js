let total = 0;
let serious = 0;
let medium = 0;
let light = 0;
let suggest = 0;
let positive = 0;

while (true) {

    let ask = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (ask === "không") {
        console.log("Kết thúc ca làm việc!");
        break;
    }

    if (ask !== "có") {
        console.log("Nhập sai! Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    total++;

    let name = "";
    do {
        name = prompt("Nhập tên bạn đọc (không được để trống):");
    } while (name.trim() === "");

    let cardID = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

    let type = +prompt(`Nhập loại phản hồi:
1 = Phàn nàn / Khiếu nại
2 = Đề xuất cải thiện
3 = Phản hồi tích cực / Khen ngợi`);

    let content = prompt("Nhập nội dung ngắn gọn:");

    if (type === 1) {

        let level = +prompt(`Nhập mức độ nghiêm trọng:
1 = Nhẹ
2 = Trung bình
3 = Nghiêm trọng`);

        if (level === 3) {
            console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            serious++;

        } else if (level === 2) {
            console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            medium++;

        } else if (level === 1) {
            console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
            light++;

        } else {
            console.log("Mức độ không hợp lệ!");
            total--;
        }

    } else if (type === 2) {
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
        suggest++;

    } else if (type === 3) {
        console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
        positive++;

    } else {
        console.log("Loại phản hồi không hợp lệ!");
        total--;
    }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + total);

console.log("Số khiếu nại nghiêm trọng (mức 3): " + serious);
console.log("Số khiếu nại trung bình (mức 2): " + medium);
console.log("Số khiếu nại nhẹ (mức 1): " + light);

console.log("Số đề xuất cải thiện: " + suggest);
console.log("Số phản hồi tích cực: " + positive);
