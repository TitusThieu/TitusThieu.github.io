

//Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong và cây DOM được tạo thành
$(document).ready(function(){

$('.form_control').attr('disabled', 'true'); //Vô hiệu hóa ô nhập phép tính và ô kết quả
$('.operation').attr('disabled','true'); //Vô hiệu hóa các nút phép toán
$('.equal').attr('disabled','true'); //Vô hiệu hóa nút bằng.

});



// Change theme:
var theme = true;
$("#theme").on("click", function(){
  if (theme == true) {
    $(".color1").css("background-color","#B5B5B5");
    $(".color2").css("background-color","#FE9D12");
    $("#wrapper").css("background-color","green");
    theme = false;

  } else {
    $(".color1").css("background-color","pink");
    $(".color2").css("background-color","green");
    $("#wrapper").css("background-color","#286090");
    theme = true;
  }
});


// Thực hiện các hành động bên trong khi click vào các nút số
$('.number').on('click', function () {
    clickedButton = this.value;   //Lấy số vừa click
    value_cal = $('.input').val(); // Lấy chuỗi gt trong ô phép tính
    console.log(value_cal);
    $('.input').val(value_cal + clickedButton); //Thêm số vừa click vào sau giá trị trong ô phép tính.
    $('.operation').removeAttr('disabled'); //Gỡ bỏ vô hiệu hóa các nút phép toán
    $('.equal').removeAttr('disabled'); //Gỡ bỏ vô hiệu hóa nút =
  });

//Thực hiện các hành động bên trong khi click vào các nút dấu chấm
$('.decimal').on('click', function(){
  clickedButton = this.value;
  value_cal = $('.input').val();
  $('.input').val(value_cal + clickedButton);
  $('.operation').attr('disabled', 'true'); 
  
});

//Thực hiện các hành động bên trong khi click vào nút AC

$('.refresh').on('click',function(){
  $('.input').val('');
  $('.output').val('');
});

//Thực hiện các hành động bên trong khi click vào nút phép toán
$('.operation').on('click', function(){
  clickedButton = this.value;
  value_cal = $('.input').val();
  $('.input').val(value_cal + clickedButton);
  $('.operation').attr('disabled', 'true'); 
  $('.decimal').removeAttr('disabled');
});

//Thực hiện các hành động bên trong khi click vào nút bằng

$('.equal').on('click', function(){
  result = $('.input').val();
  $('.output').val(eval(result));
});

//Thực hiện hành động bên trong khi click vào nút lùi 1 vị trí và xóa vị trí trước đó

$('.delete').on('click', function(){
  input_string = $('.input').val();
  $('.input').val(input_string.substring(0, input_string.length -1 ))
});

//Thực hiện các hành động bên trong khi click vào nút: tính bình phương

$('.square').on('click', function(){
  var x = $('.input').val();
  var result = 0;
  if (x != "") {
    result = x*x;
  }
  $('.output').val(result);

});

//Thực hiện các hành động bên trong khi click vào nút: tính giai thừa.

$('.factorial').on('click', function(){
  var x = $('.input').val();
  var result = 1;
  if(x != ""){
      var i = 1;
      while (i <= x){
        result*=i;
        i++;
  }
  $('.output').val(result);
}
});

