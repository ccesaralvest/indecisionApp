const carro = {
    name: 'Monza',
    marca: 'Chevrolet',
    year: [1990, 1991, 1992],
    getDataCar(){
        console.log(`we have ${this.name} from ${this.marca} in some Years:`);
        this.year.forEach((year) => {
            console.log(year);
        });
    }
}

carro.getDataCar();