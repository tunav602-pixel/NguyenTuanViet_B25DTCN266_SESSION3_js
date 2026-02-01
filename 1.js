//Hỏi thủ thư: "Hôm nay có bao nhiêu lượt mượn sách?" (số nguyên dương)
let turn = +prompt("Hôm nay có bao nhiêu lượt mượn sách: ");

//Sử dụng vòng lặp để nhập thông tin từng lượt mượn sách:
//Tên người mượn
//Tên sách
//Số ngày mượn (từ 1 đến 30 ngày)

for(let i = 1; i <= turn ; i++){
    console.log("lượt " + i);
    
    let authorName = prompt("Nhập tên người mượn: ");
    let bookName = prompt("Tên sách: ");
    let borrowDate = +prompt("Số ngày mượn: ");
    //Với mỗi lượt mượn, cần kiểm tra:
    //Nếu số ngày mượn > 14 → in thông báo: "Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)"
    //Nếu số ngày mượn ≤ 14 → in thông báo: "Mượn thành công"
    if(borrowDate > 0 || borrowDate < 30){
         console.log("Số ngày mượn không hợp lệ: ");      
    }else if(borrowDate <= 14){
        console.log("Mượn thành công");
    } else {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    }
}

console.log("Tổng số lượt mượn là: " + turn);
