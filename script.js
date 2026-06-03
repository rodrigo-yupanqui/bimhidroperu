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

const contactoForm = document.querySelector('.contacto-form');
const contactStatus = document.querySelector('#contact-status');

if (contactoForm && contactStatus) {
  contactoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = contactoForm.querySelector('input[name="nombre"]').value.trim();
    const email = contactoForm.querySelector('input[name="email"]').value.trim();
    const mensaje = contactoForm.querySelector('textarea[name="mensaje"]').value.trim();

    if (!nombre || !email || !mensaje) {
      contactStatus.textContent = 'Por favor completa todos los campos antes de enviar.';
      contactStatus.className = 'contact-status error';
      return;
    }

    const destinatario = 'yupanquivillanuevarodrigo@gmail.com';
    const asunto = encodeURIComponent('Contacto desde sitio web');
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\n${mensaje}`);
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

    contactStatus.textContent = 'Se abrirá tu cliente de correo para enviar el mensaje a yupanquivillanuevarodrigo@gmail.com.';
    contactStatus.className = 'contact-status success';
    window.location.href = mailtoLink;
  });
}
