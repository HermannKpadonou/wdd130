const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
menuToggle.classList.toggle('open');

if (menuToggle.classList.contains('open')) {
menuToggle.innerHTML = '×'; // Symbole "X" pour fermer
} else {
menuToggle.innerHTML = '☰'; // Symbole hamburger pour ouvrir
}
});