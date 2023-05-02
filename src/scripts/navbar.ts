
const burger = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

if (burger && navbar) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    })
}
