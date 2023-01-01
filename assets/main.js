
const toggle = document.querySelector('#toggle');

const priceContainer = document.querySelector(".container-flex");


toggle.addEventListener('change', ()=>{
    priceContainer.classList.toggle('mostrar');
})