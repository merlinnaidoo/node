// const person = {
//     name: 'John Doe',
//     age: 22
// };

// module.exports = person;

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`name ${this.name} age ${this.age}`)
    }
}

module.exports = Person;