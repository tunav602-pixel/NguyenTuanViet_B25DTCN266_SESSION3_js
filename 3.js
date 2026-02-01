let success = 0;
let fail = 0;

//Hỏi: "Có yêu cầu gia hạn mới không? (có/không)"
//Nếu "không" → kết thúc chương trình
//Nếu "có" → tiếp tục xử lý
while (true) {
  let extend = prompt("Có yêu cầu gia hạn mới không? (có/không)").toLowerCase();

  if (extend === "không") {
    break;
  }

  if (extend !== "có") {
    console.log("Bạn nhập không hợp lệ, vui lòng nhập lại!");
    continue;
  }

  // Nhập thông tin yêu cầu gia hạn
  let authorName = prompt("Tên bạn đọc:");
  let bookName = prompt("Tên sách:");

  let borrowDateNow;
  let borrowDateMore;

  // Nhập số ngày hợp lệ
  do {
    borrowDateNow = +prompt("Số ngày đã mượn hiện tại (>=1):");
  } while (borrowDateNow < 1);

  do {
    borrowDateMore = +prompt("Số ngày muốn gia hạn thêm (>=1):");
  } while (borrowDateMore < 1);

  let total = borrowDateNow + borrowDateMore;
  // Kiểm tra theo thứ tự ưu tiên
  if (total > 60) {
    console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
    fail++;
  } else if (borrowDateNow > 45) {
    console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
    fail++;
  } else if (total <= 30) {
    console.log("Gia hạn thành công");
    success++;
  } else {
    console.log("Gia hạn thành công (nhưng cần chú ý thời gian mượn)");
    success++;
  }
}
//Thống kê
console.log("Số lần gia hạn thành công: " + success);
console.log("Số lần gia hạn không thành công: " + fail);
``