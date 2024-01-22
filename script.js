const advice = document.getElementById('advice');
const adviceNumber = document.getElementById('adviceNumber');
const api_url = "https://api.adviceslip.com/advice";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();

    console.log(data)
    advice.innerHTML = '"' + data.slip.advice + '"';
    adviceNumber.innerHTML = "Advice  #" + data.slip.id;
}

document.getElementById('quoteButton').addEventListener('click', function () {
    getQuote(api_url);
});