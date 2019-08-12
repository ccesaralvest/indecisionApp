'use strict';

var carro = {
    name: 'Monza',
    marca: 'Chevrolet',
    year: [1990, 1991, 1992],
    getDataCar: function getDataCar() {
        //goodWay// return this.year.map((year)=>`this is the ${this.name && this.name + '!'} ` + year);
        var newArrayData = this.year.map(function (years) {
            console.log('newArrayData' + years + '!');
            return years;
        });
        return newArrayData;
    }
};
// console.log(carro.getDataCar());

var multiplier = {
    numbers: [20, 30, 40],
    multiplyBy: function multiplyBy(number) {
        var multiply = this.numbers.map(function (numbers) {
            return number * numbers;
        });
        return multiply;
    }
};
console.log(multiplier.multiplyBy(2));
