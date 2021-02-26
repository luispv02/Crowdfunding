// Menu hamburguesa
let hamburger = document.querySelector('.hamburger i');
let menu = document.querySelector('ul');
let body = document.querySelector('body');

//Modal
let modal = document.querySelector('.modal')
let abrirModal = document.querySelector('#abrir-modal');
let cerrarModal = document.querySelector('.close');

let modalIgual = document.querySelectorAll('.modal-igual');



//Radio Buttons
let seleccionar = document.querySelector('#radio-one');
let seleccionarDos = document.querySelector('#radio-two');

//Mensaje Continue
let buttonContinue = document.querySelectorAll('.continue');

let modalFinal = document.querySelector('.modal-final')
let buttonModalFinal = document.querySelector('.button-modal-final')



hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('fa-times')
    body.classList.toggle('main-responsive')
    body.classList.toggle('scroll')
})

abrirModal.addEventListener('click', () => {
    modal.style.top = '130px'
    body.classList.add('black')
})

cerrarModal.addEventListener('click', () => {
    modal.classList.remove('abrir-modal')
    body.classList.remove('black')
})


seleccionar.addEventListener('click', () => {
        let radioOne = document.querySelector('.radio-one')
        let modalTwo = document.querySelector('.modal-two')

        radioOne.style.display = 'block'
        modalTwo.style.border = '2px solid #51ABA2'
})

seleccionarDos.addEventListener('click', () => {
        let radioTwo = document.querySelector('.radio-two');
        let modalTwo = document.querySelector('.modal-three');

        radioTwo.style.display = 'block'
        modalTwo.style.border = '2px solid #51ABA2'
})

buttonContinue.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Diste click en el boton continue')

        setTimeout(() => {
            modalFinal.style.display = 'block'
            modal.style.top = '-300%'
        },500);

    })
});

buttonModalFinal.addEventListener('click', () => {
    modalFinal.style.display = 'none'
    body.classList.remove('black')

    //Eliminar borde verde y opcion de abajo
    let radioOne = document.querySelector('.radio-one')
    let modalTwo = document.querySelector('.modal-two')
    radioOne.style.display = 'none'
    modalTwo.style.border = '2px solid #B5B5B5';

    let radioTwo = document.querySelector('.radio-two');
    let modalDos = document.querySelector('.modal-three');
    radioTwo.style.display = 'none'
    modalDos.style.border = '2px solid #B5B5B5'

})

