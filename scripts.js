document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    this.reset();
});

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado pelo seu feedback!');
    this.reset();
});
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Rolando para baixo
            header.classList.add('hidden');
        } else {
            // Rolando para cima
            header.classList.remove('hidden');
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar valores negativos
    });
});
