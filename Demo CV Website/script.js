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
