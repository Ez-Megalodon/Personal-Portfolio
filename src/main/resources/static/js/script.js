window.onload = function() {
    document.querySelector('.dropdown').addEventListener('mouseover', function() {
        document.querySelector('.dropdown-content').classList.add('show');
    });

    document.querySelector('.dropdown').addEventListener('mouseout', function() {
        document.querySelector('.dropdown-content').classList.remove('show');
    });
};
let currentIndex = 0;
const slides = document.querySelectorAll('#carousel .slide');

setInterval(() => {
    slides[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].style.opacity = 1;
}, 3000);