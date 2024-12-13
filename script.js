// Seleciona o botão e a área da mensagem
const button = document.getElementById("clickButton");
const message = document.getElementById("message");


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if ( entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    }); 
});