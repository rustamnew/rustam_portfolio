let screenWidth = window.innerWidth

let slideWidth = 600

if (screenWidth < 768) {
    slideWidth = 400
}
if (screenWidth <= 320 ) {
    slideWidth = 300
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
let contacts = document.querySelector('#contacts')
let contactsButton = document.querySelector('#contacts-button')
let contactsClose = document.querySelector('#contacts-close')

contactsButton.addEventListener('click', (e) => {
    contacts.style.display = 'flex'
})

contactsClose.addEventListener('click', (e) => {
    contacts.style.display = 'none'
})