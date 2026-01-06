export default function initBitcoinFetch() {
  async function btcPrice(url) {
    try {
      const data = await fetch(url);
      const btc = await data.json();
      const btcSpan = document.querySelector(".btc-price");
      btcSpan.innerText = (1000 / btc.BRL.sell).toFixed(4);
    } catch (erro) {}
  }
  btcPrice("https://blockchain.info/ticker");
}
