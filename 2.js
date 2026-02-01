//Hỏi thủ thư: "Hôm nay có bao nhiêu lượt trả sách?" (số nguyên dương)
let turn = +prompt("Hôm nay có bao nhiêu lượt trả sách: ");
if(turn <= 0){
 console.log("Lượt trả không hợp lệ ");
} else {
    console.log("Đã ghi nhận luợt trả");
}

//Sử dụng vòng lặp để nhập thông tin từng lượt trả sách:
//Tên người trả
//Tên sách
//Số ngày đã mượn thực tế (người dùng nhập số nguyên từ 1 trở lên)
let totalTurn = 0;
for(let i = 1 ; i <= turn ; i++){
    console.log(`Lượt trả thứ ${i}`);
    let authorName = prompt("Tên người trả: ");
    let bookName = prompt("Tên sách: ");
    //Kiểm tra số ngày đã mượn có hợp lệ không (phải là số nguyên ≥ 1) → Nếu không hợp lệ → yêu cầu nhập lại cho đến khi đúng
     let borrowDate;
     do{
        borrowDate = +prompt("Nhập số ngày đã mượn");
        console.log("Đã ghi nhận số ngày mượn");
     } while (borrowDate < 1);
     //Sau khi có số ngày hợp lệ, kiểm tra tình trạng:
     //Nếu số ngày ≤ 14 → "Trả đúng hạn"
     //Nếu số ngày = 15 đến 21 → "Trả muộn nhẹ" + "Phạt nhắc nhở"
     //Nếu số ngày > 21 → "Quá hạn nghiêm trọng" + "Cần ghi biên bản phạt"

    if(borrowDate >= 14){
        console.log("Trả đúng hạn");
    } else if(borrowDate >= 15 && borrowDate <= 21){
        console.log("Trả muộn nhẹ" +" "+ "Phạt nhắc nhở");
        totalTurn++;
    } else {
        console.log("Quá hạn nghiêm trọng" +" " + "Cần ghi biên bản phạt");
        totalTurn++;
    }
}
//Sau khi nhập xong tất cả lượt trả, in ra thống kê:
//Tổng số lượt trả sách
//Số lượt trả muộn (≥ 15 ngày)
    console.log("Tổng số lượt trả sách hôm nay là: " + turn);
    console.log("Số lượt trả muộn: " +totalTurn);
    