let calculator = require('../');

describe ("calculator", function() {
    it ("calculator that returns one number", function () {
        expect(calculator(3, 7)).toBe(10);
    });
});