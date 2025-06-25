export default async function fetchBitcoin(url, target) {
  try {
    const data = await fetch(url);
    const btc = await data.json();
    const btcSpan = document.querySelector(target);
    btcSpan.innerText = (1000 / btc.BRL.sell).toFixed(4);
  } catch (erro) {}
}
