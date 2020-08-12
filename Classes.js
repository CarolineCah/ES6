//Classes Challenge

class Player {
	constructor(name, country) {
		this.name = name;
		this.country = country;
}

introduce() {
console.log(`${this.name} was born in ${this.country}`);
}
}

const messi = new Player("Messi", "Argentina");

messi.introduce();

class TennisPlayer extends Player {

	constructor(name, country,  age) {
		super(name, country)
		//this keyword of super is basicly represent whatever is up in the constructor in player. 
		this.age = age;
age = this.age;
}

playTennis() {
	console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
}
}

const roger = new TennisPlayer( "Roger Federer", "Spain", 38);
roger.introduce();
roger.playTennis();