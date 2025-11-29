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
    if(menuOpen) {
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
