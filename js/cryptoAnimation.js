<script src="js/cryptoAnimation.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const cryptos = document.querySelectorAll('.crypto-animation');

    cryptos.forEach((crypto) => {
        let angle = 0;
        const speed = Math.random() * 2 + 1; // Velocidad aleatoria
        const amplitude = Math.random() * 30 + 20; // Amplitud aleatoria

        function animateCrypto() {
            angle += speed;
            const x = Math.sin(angle * (Math.PI / 180)) * amplitude;
            const y = Math.cos(angle * (Math.PI / 180)) * amplitude;
            crypto.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animateCrypto);
        }

        animateCrypto();
    });
});