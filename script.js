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
let wrapper = document.querySelector('.wrapper')

contactsButton.addEventListener('click', (e) => {
    contacts.style.display = 'flex'
    wrapper.style.height = 0
})

contactsClose.addEventListener('click', (e) => {
    contacts.style.display = 'none'
    wrapper.style.height = 'auto'
})

let viewports = document.createElement('div')
viewports.style.position = 'absolute'
viewports.style.right = 0
viewports.style.top = 0
viewports.innerHTML = screenWidth
wrapper.append(viewports)
