const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = {sum};

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // One dollar is equivalent to 156.5 Japanese Yen
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function (valueInYeng) {
    let valueInPound = valueInYeng * 0.87
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

