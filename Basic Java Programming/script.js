function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    // Exchange rates (base: INR)
    let rates = {
        "INR": 1,
        "USD": 0.012,
        "EUR": 0.011,
        "GBP": 0.0095,
        "JPY": 1.8
    };

    let result;

    // Convert to INR first, then to target currency
    let amountInINR = amount / rates[from];
    result = amountInINR * rates[to];

    document.getElementById("result").innerHTML =
        amount + " " + from + " = " + result.toFixed(2) + " " + to;
}




