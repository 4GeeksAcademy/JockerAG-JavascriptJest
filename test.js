const { sum, fromEuroToDollar } = require ('./app.js');

test('adds 14 + 9 to equal23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 167.455", function() {
    const {fromDollarToYen} = require('./app.js');

    const yens = fromDollarToYen(0.93)

    const expected = 0.93 * 156.5

    expect(fromDollarToYen(0.93)).toBe(145.54500000000002)
})

test ("One JPY should be 0.005481", function() {
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(0.0063)
    const expected = 0.0063 * 0.87
    expect(fromYenToPound(0.0063)).toBe(0.005481)
})