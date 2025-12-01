// ---------------- NAVBAR MENU ----------------

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;

    mobileMenu.classList.toggle('menuHidden');
    mobileMenu.classList.toggle('menuVisible');

    hamburgerIcon.classList.toggle('itIsHidden');
    closeIcon.classList.toggle('itIsHidden');
}

function closeMenu() {
    if (menuOpen) {
        toggleMenu();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && menuOpen) {
        closeMenu();
    }
});


// ---------------- LEAFLET MAP ----------------

var map = L.map('map').setView([19.07617747318604, 72.87748570104678], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([19.07617747318604, 72.87748570104678]).addTo(map);
