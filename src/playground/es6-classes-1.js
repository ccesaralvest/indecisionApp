class Person {
	constructor(name = 'anonymous', age = 0){
		this.name = name;
		this.age = age;
	};
	getGretting(){
		return `Hi ${this.name}`;
	};
	getDescription(){
		return `${this.name} has ${this.age} year old`
	};
};


const caio = new Person('Caio', 28);
console.log(caio);

console.log(caio.getDescription());