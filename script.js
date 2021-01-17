let screenWidth = window.innerWidth

let slideWidth = 600

if (screenWidth < 768) {
    slideWidth = 400
}

$(document).ready(function(){
    $('.slider').bxSlider({
        slideWidth: slideWidth,
        infiniteLoop: false
    });
  });

$(document).ready(function(){
    $('.slider-diplom').bxSlider({
        slideWidth: slideWidth,
        infiniteLoop: false
    });
});