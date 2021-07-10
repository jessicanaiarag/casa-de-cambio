window.onload = () => {
    setupEventHandlers();
}

const setupEventHandlers = () => {
    const searchbutton = document.querySelector('#search-button');
    searchbutton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
    const currencyValue = document.querySelector('#currency-input').value;
}

const fetchCurrency = () => {
    fetch(`https://api.exchangerate.host/latest?`).then((response) => console.log(response))
    .catch((error) => console.log(error, 'errou'));
}

fetchCurrency ();