const darkModeBtn = document.getElementById('dark-mode-btn');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', function() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode');
    
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.classList.toggle('dark-mode');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.toggle('dark-mode'));

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle('dark-mode'));
    
    const footer = document.querySelector('.bg-dark');
    footer.classList.toggle('dark-mode');
  });
}