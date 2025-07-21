// Seleciona todos os links de navegação que começam com '#' (âncoras internas)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o compoprtamento padrão do link (pular bruscamente)
        
        //Obtém o id da seção para onde o link aponta (ex: #experiencia)
        const targetId = this.getAttribute('href');

        //Encontra o elemento da seção correspondente
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoview({
                //behavior: 'smooth' // Este é a propriedade mágica para a rolagem suave!
            });
        }
    });
});