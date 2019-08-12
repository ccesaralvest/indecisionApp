const carro = {
    name: 'Monza',
    marca: 'Chevrolet',
    year: [1990, 1991, 1992],
    getDataCar(){
        //goodWay// return this.year.map((year)=>`this is the ${this.name && this.name + '!'} ` + year);
        const newArrayData = this.year.map((years) =>{
            console.log('newArrayData' + years + '!')
            return years;
        })
        return newArrayData;
    }
}
// console.log(carro.getDataCar());

const multiplier = {
    numbers:[20, 30, 40],
    multiplyBy(number){
        const multiply = this.numbers.map((numbers) => number * numbers);
        return multiply;
    }
}
console.log(multiplier.multiplyBy(2));