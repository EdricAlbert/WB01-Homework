$(document).ready(function(){
    $(window).scroll(function(){    
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2.5,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
var modal1 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

let elm_signup = document.getElementById('signupbtn');
let elm_signupform = document.getElementById('form-signup');

let arr_username = [];
let arr_password = [];

let elm_emailsignup = document.getElementById('email');
let elm_pswsignup = document.getElementById('psw');
let elm_psws1signup = document.getElementById('psw1');

elm_signupform.addEventListener('submit', function(event){
    event.preventDefault();

    let emailsignup = elm_emailsignup.value;
    arr_username.push(emailsignup);
    let pswsignup = elm_pswsignup.value;
    let psw1signup = elm_psws1signup.value;
    if ( (psw1signup) == (pswsignup) )   {
        arr_password.push(pswsignup);
        alert('Đăng ký thành công');
    }
    else{
    alert('Trong phần repeat password bị sai, xin bạn check lại!')
    }
})
let elm_login = document.getElementById('login1');
let elm_form = document.getElementById('form-login');

let elm_username = document.getElementById('username');
let elm_password = document.getElementById('pswlogin');

elm_form.addEventListener('submit', function(event){
    event.preventDefault();

    let username = elm_username.value;
    let flag = false; 
    let length = arr_username.length

    for(let i = 0; i < length; i++){
        if(username == arr_username[i]){
            let password = elm_password.value;
            if(password == arr_password[i]){
                alert('Login thành công');
            }else{
                alert('Sai mật khẩu');
            }
            flag = true;
            break;
        }
    }

    if(flag == false){
        alert('Bạn chưa tạo tài khoản, xin bạn vô phần sign up ạ!');
    }
})