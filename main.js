const navbar = document.getElementById('nav-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sombra-navbar');
    } else {
        navbar.classList.remove('sombra-navbar');
    }
});
