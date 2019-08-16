class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getDescription(){
		return `${this.name} has ${this.age} years old`
	}
	getGretting(){
		return `Hi ${this.name}`
	}
}

class Student extends Person {
	constructor(name, age, major){
		super(name, age);
		this.major = major;
	}
	hasMajor(){
		return !!this.major;
	}
	getDescription(){
		let studentDescription = super.getDescription();
		if(this.hasMajor()){
			studentDescription += `and Study ${this.major}.`
		}
		return studentDescription;
	}
}

class Traveler extends Person {
	constructor(name, age, homelocation){
		super(name, age);
		this.homelocation = homelocation;
	}

	hasHomeLocation(){
		return !!this.homelocation;
	} 
	getDescription(){
		let travelerDescription = super.getDescription();
		if(this.hasHomeLocation()){
			return travelerDescription += `. Im visiting from ${this.homelocation}`;
		} else {
			return travelerDescription;
		}
	}
}

const caio = new Traveler('Caio', 28, 'SP');
console.log(caio.getDescription());