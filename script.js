window.onload = () => {
    setupEventHandlers();
}
// Pegando botão e fazendo evento de click  
const setupEventHandlers = () => {
    const searchbutton = document.querySelector('#search-button');
    searchbutton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
    const currencyValue = document.querySelector('#currency-input').value;
}

const fetchCurrency = () => {
    fetch(`https://api.exchangerate.host/latest?`)
    .then((response) => response.json())
    .then((object) => {
     const rates = object.rates;
     const ratesEntries = Object.entries(rates);
     console.log(ratesEntries);
    })
    .catch((error) => console.log(error, 'errou'))
};

fetchCurrency ();