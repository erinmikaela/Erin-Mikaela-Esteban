function toggleMenu() {
    const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open"); 
  }

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  const desktopNav = document.getElementById("desktop-nav");
  const hamburgerNav = document.getElementById("hamburger-nav");

  // Check if the user scrolled down more than 50px
  if (window.scrollY > 50) {
    desktopNav?.classList.add("nav-scrolled");
    hamburgerNav?.classList.add("nav-scrolled");
  } else {
    desktopNav?.classList.remove("nav-scrolled");
    hamburgerNav?.classList.remove("nav-scrolled");
  }
});

// Optional: Debugging to check scroll behavior
console.log("Script loaded! ScrollY:", window.scrollY);



