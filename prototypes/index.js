
// PROTOTYPES AND PROTOTYPICAL INHERITANCE.
// Prototypes are essentially parents of other objects. Every `child` inherit all the members in its prototype. When calling a method on an object if that object doesn't have that specific method, the JS engine will search its prototype (parent) for it, and if it cannot find the method in the prototype, the result will be undefined. A PROTOTYPE IS JUST A REGULAR OBJECT.



// MULTILEVEL INHERITANCE.

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {console.log(`draw`);}
};

const circleOne = new Circle(10);
// Opening circleOne on the console we'll see that its PROTOTYPE will be the `Circle` constructor.
// OBJECTS CREATED BY A GIVEN CONSTRUCTOR WILL HAVE THE SAME PROTOTYPE. 
// THE `Circle` constructor will also have a parent (PROTOTYPE), that will be the OBJECT PROTOTYPE.



// PROPERTY DESCRIPTORS.
// Every object property has THREE special attributes (flags) that we can access using the OBJECTS METHOD `getOwnPropertyDescriptor`. They are `configurable`, `enumerable`, `writable`, by default setted on true on our own objects.


const person = {name: `John`};
const descriptors = Object.getOwnPropertyDescriptor(person, `name`);
console.log(descriptors); // return an object => {value: 'John', writable: true, enumerable: true, configurable: true}, CALLED PROPERTY DESCRIPTOR.

// We can change their boolean value using the `defineProperty` object method.

Object.defineProperty(person, `name`, {
    writable: false,
    enumerable: false,
    configurable: true
});



// PROTOTYPE VS ISTANCE MEMBERS.
// When dealing with large number of objects it's a good practice to put their method on their prototype.

function Square(side) {
    this.side = side;
};

// Before we put the draw method inside the constructor, using that as an instance, but that will create several copies of that method, one for every object we will create with that constructor. This will affect memory usage. We can put the draw method on the constructor prototype, and thanks to the inheritance it will be accessible to all its child.

// We access the prototype using and then we add the method using the dot notation as it wuold be on a normal object.
Square.prototype.draw = function() {
    console.log(`draw`);
};





