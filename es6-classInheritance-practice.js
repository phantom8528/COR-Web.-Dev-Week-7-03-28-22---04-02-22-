//----------------------------HomePractice(04/03/22)----------------------------
//Ex.)
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// //inheriting the parent class
// class Student extends Person{

// }

// //calling the child class, which can use methods from the parent class
// let student1 = new Student('Jack');
// student1.greet(); //Returns: Hello Jack

//Ex.2)
class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    advertisement(){
        let ad = `
        Take a look at our all new 
        ${this.year} ${this.make} ${this.model} 
        in a all new ${this.color} color`;
        console.log(ad);
    }
}
//Declare the child class 
class Tesla extends Car{

}
let electricCar = new Tesla("Tesla", "Roadster", "2022", "Red");
electricCar.advertisement();
/**
Returns:
------------
        Take a look at our all new 
        2022 Tesla Roadster 
        in a all new Red color
 */

//-------------------JavaScript .super() keyword-------------------
class Pet {
    constructor(breed, age, gender){
        this.breed = breed;
        this.age = age;
        this.gender = gender;
    }
    vetOrder(){
        let ticket = `${this.breed} is of age ${this.age} and is a ${this.gender}`;
        console.log(ticket);
    }
}

class Dog extends Pet {
    constructor(breed, age, gender){
        console.log(`Creatingt the Dog Class\n`);
        //Call the super() keyword 
        super(breed, age, gender);

    }
}
let myDog = new Dog("Poodle", 22, "Male");
myDog.vetOrder();//Returns: Poodle is of age 22 and is a Male

//-------------------Overriding Methods or Properties----------------------
//Ex.1)
class Person{
    constructor(name){
        this.name = name;
        this.occupation = "un-employed";
    }
    greet(){
        console.log(`Hello, My Name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name){
        super(name);
        //overriding an occupation property
        this.occupation = "Student";
    }
    //overriding the greet() method
    greet(){
        console.log(`Hello , My Name is ${this.name}`);
        console.log(`Occupation: ${this.occupation}`);
    }

}

let p = new Student("Gabriel");
p.greet(); 

/**
Returns:
--------------
Hello , My Name is Gabriel
Occupation: Student
 */

