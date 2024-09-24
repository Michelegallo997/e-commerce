const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
let nextButton= document.getElementById('next');
let prevButton= document.getElementById('prev');
let backButton= document.getElementById('back');
let seeMoreButton=document.querySelectorAll('.seeMore');
let carrusel=document.querySelector('.carrusel');
let listHTML=document.querySelector('.carrusel .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider= (type) => { 
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carrusel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carrusel .list .item');
    if(type === 'next'){
    listHTML.appendChild(items[0]);
    carrusel.classList.add('next');
    }else{
    let positionLast = items.length -1;
    listHTML.prepend(items[positionLast]);
    carrusel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
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

