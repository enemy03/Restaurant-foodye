//MENU BURGER

const burger = document.querySelector('.menu_burger');
const aside = document.querySelector('aside');
const close = document.querySelector('aside i');

burger.addEventListener('click', function () {
    aside.classList.add('active');

})

close.addEventListener('click', function () {
    aside.classList.remove('active');
})