document.addEventListener('DOMContentLoaded', function() {
    // Evento load
    console.log('Página carregada com sucesso!');
    
    const iaImage = document.getElementById('ia-image');
    let imageFlipped = false;
    
    // Evento mouseover - virar imagem apenas uma vez
    iaImage.addEventListener('mouseover', function() {
        if (!imageFlipped) {
            this.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                this.src = 'images/poderdaia.png';
                imageFlipped = true;
            }, 300);
        }
    });
    
    // Evento click no botão
    document.querySelector('.btn').addEventListener('click', function(e) {
        console.log('Botão LEARN MORE clicado');
    });
    
  // Evento dblclick - resetar imagem
iaImage.addEventListener('dblclick', function() {
    this.style.transform = 'rotateY(0deg)';
    setTimeout(() => {
        this.src = 'images/ia.png';
        imageFlipped = false;
    }, 300);
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