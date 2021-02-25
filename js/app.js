let hamburger = document.querySelector('.hamburger i');
let menu = document.querySelector('ul');
let body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('fa-times')
    body.classList.toggle('main-responsive')
    body.classList.toggle('scroll')
})