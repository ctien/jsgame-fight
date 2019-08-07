/*
!   "THIS" là từ khóa đại diện cho "CONTEXT" của function

    function(context, arguments...){
*       context ở đây được thể hiện thông qua từ khóa "this"
    }

    @ Vậy muốn kiểm xoát tốt con trỏ "this" thì phải hiểu được context trong từng trường hợp cụ thể

    * call và apply truyền new-context vào hàm và "thực thi" ngay lập tức:
    * call và apply chỉ khác nhau cách truyền "arguments..." vào hàm:
        - function.call(new-context, arguments...)
        - function.apply(new-context, [arguments...])
    * bind trả về  1 "hàm mới" được gắn "context mới"
        - var newFunction = function.bind(new-context, arguments...)
var bienGlobal = "biến global";


! CLOSURE

function fnB() {
    * dữ liệu được dấu trong này
    var bienB = "biến trong fnB";
    var bienB1 = "biến trong fnB";
    var bienB2 = "biến trong fnB";

    function fnA() {
        * fnA có thể lấy dữ liệu trong fnB
        var bienA = "biến trong fnA";
        return {
            bienGlobal,
            bienB,
            bienA
        };
    }

    return fnA;
};

var fnA = fnB();

console.log(fnA()); // output: {bienGlobal: "biến global", bienB: "biến trong fnB", bienA: "biến trong fnA"}

    * fnA có thể truy cập vùng dữ diệu bên trong fnB(vùng dữ liệu này được gọi là closure).
    * closure có nghĩa là bao đóng: ý nói vùng dữ liệu bao bọc fnA.
    * Muốn truy xuất dữ liệu trong fnB thì chỉ có thể đi qua những cánh cổng như fnA.
    * Ứng dụng để làm gì thì học thêm sẽ rõ.


*/