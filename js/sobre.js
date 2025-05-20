document.addEventListener('DOMContentLoaded', function() {
    // Evento load
    console.log('Página Sobre nós carregada com sucesso!');
    
    // Evento keydown - mensagem especial
    document.addEventListener('keydown', function(e) {
        const messages = [
            "Potencialize sua carreira com IA inovadora!",
            "Desbloqueie habilidades que o mercado exige!",
            "Junte-se à próxima geração de especialistas em IA!",
            "Transforme conhecimento em resultados reais!",
            "Aprenda IA com quem entende do futuro!",
            "Seu talento merece o poder da Inteligência Artificial!",
            "O futuro é agora — prepare-se com a gente!",
            "Inove, crie e lidere com inteligência artificial!",
            "A revolução tecnológica começa com você!",
            "Aprender IA é o primeiro passo para o sucesso!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('key-message').textContent = randomMessage;
    });
    
    
    // Evento click
    document.querySelector('.btn').addEventListener('click', function(e) {
        console.log('Botão de inscrição clicado');
    });
    
    // Evento dblclick
    document.querySelector('h1').addEventListener('dblclick', function() {
        alert('Você deu um duplo clique no título!');
    });
    
    // Evento focus/blur
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #097a6c';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Evento resize
    window.addEventListener('resize', function() {
        console.log(`Janela redimensionada: ${window.innerWidth}x${window.innerHeight}`);
    });
});