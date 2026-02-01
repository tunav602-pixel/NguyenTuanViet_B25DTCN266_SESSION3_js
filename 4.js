let lost = 0; // sách mất
let outStock = 0; // sách hết hàng
let more = 0; // sách tồn khi nhiều
let normalMore = 0; //sách tồn kho bình thường
let totalBook = 0;


//Hỏi: "Tiếp tục kiểm kê sách tiếp theo? (có/không)" (Dùng prompt)
//Nếu "không" → kết thúc và in thống kê
//Nếu "có" → tiếp tục nhập thông tin sách

while(true){
    let testBook = prompt("Tiếp tục kiểm kê sách tiếp theo?(có/không)");
    testBook = testBook.trim().toLowerCase();

    if(testbook === "không"){
        break;
    }

    if(testBook !== "có"){
        console.log("Bạn đã nhập sai thông tin. Vui lòng nhập lại");
        continue;
    }
    //Nhập thông tin sách
    
    if(testBook ==="có"){
    let idBook = prompt("Nhập mã sách: ");
    let bookName = prompt("Nhập tên sách: ");
    let number;

    do{
    number = +prompt("Số lượng thức tế đang có trong kho: ");
    }while(number < 0);

    // xử lý
    let status = +prompt(`Tình trạng sách (nhập số tương ứng):
                         1 - Bình thường (có thể cho mượn)
                         2 - Mất (không còn trong kho)`);
                         
                         if(status === 1 && number === 0){
                              outStock++;
                         } else if( status === 1 && number > 0 && number < 10){
                            normalMore++;
                         } else if( status === 1 && number >=10){
                            more++;
                         } else {
                            lost++;
                         }
                         totalBook++;
                        }
}

 console.log("Tổng số sách đã kiểm kê: " + totalBook );
 console.log("Số sách mất: " + lost + "cuốn");
 console.log("Số sách hết hàng: " + outStock + "cuốn");
 
 
 while (true) {
    let testBook = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (testBook === "không") {
        break;
    }

    if (testBook !== "có") {
        console.log("Bạn đã nhập sai thông tin. Vui lòng nhập lại");
        continue;
    }

    let idBook = prompt("Nhập mã sách: ");
    let bookName = prompt("Nhập tên sách: ");
    let number;

    do {
        number = +prompt("Số lượng thực tế đang có trong kho: ");
    } while (number < 0);

    let status = +prompt(`Tình trạng sách:
1 - Bình thường (có thể cho mượn)
2 - Mất (không còn trong kho)`);

    if (status === 2) {
        lost++;
    } else if (status === 1 && number === 0) {
        outStock++;
    } else if (status === 1 && number >= 10) {
        more++;
    } else if (status === 1 && number >= 1 && number <= 9) {
        normalMore++;
    }

    totalBook++;
}

console.log("Tổng số sách đã kiểm kê: " + totalBook);
console.log("Số sách mất: " + lost + " cuốn");
console.log("Số sách hết hàng: " + outStock + " cuốn");
console.log("Số sách tồn kho nhiều: " + more + " cuốn");