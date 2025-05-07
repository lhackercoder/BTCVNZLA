document.addEventListener('DOMContentLoaded', () => {
    async function fetchCryptoPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd');
            const data = await response.json();
            document.getElementById('btc-price').textContent = `BTC: $${data.bitcoin.usd}`;
            document.getElementById('eth-price').textContent = `ETH: $${data.ethereum.usd}`;
            document.getElementById('bnb-price').textContent = `BNB: $${data.binancecoin.usd}`;
        } catch (error) {
            console.error('Error al obtener los datos de CoinGecko:', error);
        }
    }

    // Actualizar precios cada 60 segundos
    fetchCryptoPrices();
    setInterval(fetchCryptoPrices, 60000);
});