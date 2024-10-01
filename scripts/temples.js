const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
menuToggle.classList.toggle('open');
});

menuToggle.addEventListener('click', () => {
if (menuToggle.classList.contains('open')) {
menuToggle.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
} else {
menuToggle.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
}
});