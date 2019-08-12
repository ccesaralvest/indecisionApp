'use strict';

var carro = {
    name: 'Monza',
    marca: 'Chevrolet',
    year: [1990, 1991, 1992],
    getDataCar: function getDataCar() {
        console.log('we have ' + this.name + ' from ' + this.marca + ' in some Years:');
        this.year.forEach(function (year) {
            console.log(year);
        });
    }
};

carro.getDataCar();
