// convertCurrency(10000, 1.0946, 'dollar'); // 'Give them 10946 dollar(s)'
// convertCurrency(250, 4.338, 'zloty'); // 'Give them 1084.50 zloty(s)'
// convertCurrency(1, 40.7131, 'hryvnia'); // 'Give them 40.71 hryvnia(s)'
// convertCurrency(1, 5.3364, 'Real'); // 'Give them 5.34 Real(s)'
// convertCurrency(-100, -0.034, 'bolivar'); // 'Enter valid data'

// Amount = Quantia
// exchangeRate Taxa De Cambio
// currency Name Nome da Moeda

function convertCurrency(amount, exchangeRate, currencyName) {
    let total = amount * exchangeRate;

    if(amount <= 0 || exchangeRate <= 0) {
        return 'Enter valid data';
    }

    if(!Number.isInteger(total)) {
        total = total.toFixed(2);
    }

    return `Give them ${total} ${currencyName}(s)`;
    
}

console.log(convertCurrency(10000, 1.0946, 'dollar'));