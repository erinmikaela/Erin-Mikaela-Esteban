function toggleMenu() {
  const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}

document.addEventListener('scroll', () => {
const desktopNav = document.querySelector('#desktop-nav');
const hamburgerNav = document.querySelector('#hamburger-nav');

if (window.scrollY > 0) {
  desktopNav.classList.add('scrolled');
  hamburgerNav.classList.add('scrolled');
} else {
  desktopNav.classList.remove('scrolled');
  hamburgerNav.classList.remove('scrolled');
}
})
