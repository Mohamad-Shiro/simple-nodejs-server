const { __esModule } = require("uuid");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(`Hello there ${this.name}, people in ${this.age} age are all awesome!`);
    }
}

module.exports = Person;