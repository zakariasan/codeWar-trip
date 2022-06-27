class Person  {
    constructor(name, age, role){ 
    this.name =name; 
    this.age = age;
    this.role =  role;
    }
    greeting() {
        console.log( `My name is ${this.name} and Im ${this.role} role`)

    }
}

module.exports = Person;
