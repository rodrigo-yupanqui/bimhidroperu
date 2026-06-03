const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
