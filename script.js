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
    fetchCurrencyAwaitAsyncy(currencyValue);
}

// Com Then 
/* const fetchCurrency = (currency) => {
    fetch(`https://api.exchangerate.host/latest?base=${currency}`)
        .then((response) => response.json())
        .then((object) => {
            updateBaseCurrency(object.base);
            const rates = object.rates;
            handleRates(rates);
        })
        .catch((error) => console.log(error, 'errou'));
};
*/

// Com Async Await 
const fetchCurrencyAwaitAsyncy = async (currency) => {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}`)
    const object = await response.json();
    updateBaseCurrency(object.base);
    const rates = object.rates;
    handleRates(rates);
}

const clearList = () => {
    const currencyList = document.querySelector('#currency-list');
    currencyList.innerText = '';
}

const updateBaseCurrency = (base) => {
    const baseTitle = document.querySelector('#base');
    baseTitle.innerText = `Valores referentes a 1 ${base}`;
}

const renderRate = (currency, rates) => {
    const currencyList = document.querySelector('#currency-list');
    const itenCurrencyList = document.createElement('li');
    itenCurrencyList.innerHTML = `<strong> ${currency}: </strong> ${rates.toFixed(2)}`;
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