const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carrusel = document.querySelector('.carrusel');
let listHTML = document.querySelector('.carrusel .list');

// Array de degradados para el fondo, uno para cada ítem del carrusel
const backgroundGradients = [
    'linear-gradient(to bottom, #f4f4f4, #063861)', 
    'linear-gradient(to bottom, #5b0f0f, #191719)', 
    'linear-gradient(to bottom, #64f19d, #267f0f)', 
    'linear-gradient(to bottom, #d990e6, #bc338e)', 
    'linear-gradient(to bottom, #493b2a, #323032)'
];

let currentIndex = 0; // Índice actual del carrusel, empezamos en el primer item

nextButton.onclick = function(){
    showSlider('next');
    currentIndex = (currentIndex + 1) % backgroundGradients.length; // Actualiza el índice al siguiente ítem
    setBackground(); // Cambiar el fondo según el ítem actual
}

prevButton.onclick = function(){
    showSlider('prev');
    currentIndex = (currentIndex - 1 + backgroundGradients.length) % backgroundGradients.length; // Índice al ítem previo
    setBackground(); // Cambiar el fondo según el ítem actual
}

let unAcceppClick;
const showSlider = (type) => { 
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carrusel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carrusel .list .item');
    
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carrusel.classList.add('next');
    } else {
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        carrusel.classList.add('prev');
    }
    
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}

// Función para establecer el fondo basado en el índice actual
const setBackground = () => {
    document.body.style.backgroundImage = backgroundGradients[currentIndex];
}

seeMoreButton.forEach(button => {
    button.onclick = function(){
        carrusel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carrusel.classList.remove('showDetail');
}

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
