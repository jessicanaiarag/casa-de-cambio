window.onload = () => {
    setupEventHandlers();
}
// Pegando botão e fazendo evento de click  
const setupEventHandlers = () => {
    const searchbutton = document.querySelector('#search-button');
    searchbutton.addEventListener('click', handleSearchEvent);
}
// Capturando o value do input
const handleSearchEvent = () => {
    const currencyValue = document.querySelector('#currency-input').value;
    clearList();
    fetchCurrency(currencyValue);
}

const fetchCurrency = (currency) => {
    fetch(`https://api.exchangerate.host/latest?base=${currency}`)
        .then((response) => response.json())
        .then((object) => {
            updateBasecurrency(object.base);
            const rates = object.rates;
            handleRates(rates);
            //console.log(ratesEntries);
        })
        .catch((error) => console.log(error, 'errou'));
};

const clearList = () => {
    const currencyList = document.querySelector('#currency-list');
    currencyList.innerText = '';
}

const updateBasecurrency = (base) => {
    const baseTitle = document.querySelector('#base');
    baseTitle.innerText = `Valores referentes a 1 ${base}`;
}

const renderRate = (currency, rates) => {
    const currencyList = document.querySelector('#currency-list');
    const itenCurrencyList = document.createElement('li');
    itenCurrencyList.innerText = `${currency}: ${rates}`;
    currencyList.appendChild(itenCurrencyList);
}

const handleRates = (rates) => {
    const ratesEntries = Object.entries(rates);
    ratesEntries.forEach((entry) => {
        const currency = entry[0];
        const rates = entry[1]
        renderRate(currency, rates);
    });
};