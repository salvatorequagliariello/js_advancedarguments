
// CLASSES.
// We can define classes ad a template for creating objects. A class is manily composed by a CONSTRUCTOR and METHODS.
// A CONSTRUCTOR is a special method to initialize the object. Every istance of the class will have the constructor properties and methods. Everything declared outside the constructor will be part of the class prototype, and if it's not private can be accessible from every istance of the class thanks to prototypal inheritance.

class User {

    constructor(name) {
        this.name = name;
        this.sayBye = () => {
            console.log(`Bye!`)
        };
    };

    sayHi() {
        console.log(`Hi!`);
    };



};

const mike  = new User(`Mike`);





// HOISTING.
// Unlike FUNCTIONS, using the declaration method (e.g: class Circle(){}), instead of the expression method (e.g const Circle = Class(){}), will not let the class be hoisted. There is NO HOISTING within classes. Every class should be declared (or expressed) before its use.

// IT'S GOOD PRACTICE TO USE THE CLASS DECLARATION METHOD, not the expression one.





// STATIC METHODS.
// Static methods are avaiable on the class itself. NOT THE OBJECT ISTANCE, so they are not accessible from the class istance (object). Static properties (fields and methods) are used to create utility functions that are not specific to a given object.
// Static methods are usually usedto create or clone objects, while static properties are used to for caches or every other data you don't need replicated on every istance.

class Color {

    constructor(r, g, b) {
        this.values = [r, g, b];
    }

    getRed() {
        return this.values[0];
    }

    setRed(value) {
        this.values[0] = value;
    }

    static colorName = `color`;   // Static property declaration

    static showColor() {          // Static method declaration
        console.log(`Calling a static method`);
    }
};

console.log(Color.showColor());  // The function and the property must each be called directly on the Class itself.
console.log(Color.colorName);     





// PRIVATE MEMBERS.
// It's possible to define PRIVATE METHODS AND PROPERTIES (FIELDS) using and HASHTAG befor the declaration #.

class Car {

    constructor(model) {
        this.model = model;
    }

    drive() {
        console.log(`drive`);
    }

    #carName = this.model;          // A private member.

    #getCarName() {                 // A private function.
        return this.#carName;
    }
};



// GETTERS AND SETTERS.
// Getters and setters can be used in classes just like in objects, to set and get private members. Their sintax is pretty simply, in fact we use `get` for getters and `set` for setters.

const _side = new WeakMap();

class Square {

    constructor(side) {
        _side.set(this, side);
    }

    get side() {
        return _side.get(this);
    }

    set side(value) {
        _side.set(this, value);
    }

};

const s = new Square(4);



// INHERITANCE.
// To create inheritance between two classes is used the word EXTENDS.

// Here we define a parent class called ANIMAL.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a noise!`)
    }
}

// If there is a constructor present in the subclass (or childclass) we first need to call super() and pass in the name parameter,  before using this.

class Dog extends Animal {    // Here we use the keyword extends to create inheritance with Animal. 
    constructor(name, collar){
        super(name);
        this.collar = collar;          
    }

    eat() {
        console.log(`${this.name} barks.`);
    }
}

const fuffy = new Dog(`Fuffy`, `blue`);





// METHOD OVERRIDING.
// Method overriding works exactly like for objects. When two classes, with one inheriting from the other, have a method with the same name, prototypical inheritance will take the one on the child first.

// When we need to access a method in the parent, we can use the super keyword. To call a method, super.NAMEOFTHEMETHOD().


class Shape {

    move(){
        console.log(`move`);
    }

    draw() {
        console.log(`draw`);
    }

};


class Circle extends Shape {
  
    move() {
        super.move()                    // Calling the PARENT move method, with the super keyword.
        console.log(`circle move!`);
    }

};

const c = new Circle();
console.log(c.move()); // Will log `circle move`;



