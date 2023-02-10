const prompt = require(`prompt-sync`)();


// DECLARING AN OBJECT.


// Object literal.
// You can declare an object simply using the brackets.
const circle = {
    radius: 1,              // Property.
    location: {             // Property.
        x: 1,
        y: 1
    },
    draw: function() {      // Function.
        console.log(`draw`);
    }
};




// FACTORY FUNCTION.

// When an object has a behavior (multiple methods), using the brackets to define it can be difficult and it can create some bugs. We can use a factory function to return an object with some parameters as key and values. 
function createCircle (radius) {

    return {
        radius,
        draw: function () {
            console.log(`draw`);
        }
    }

};

const circle2 = createCircle(2);
const circle3 = createCircle(3);
console.log(circle2.radius, circle3.radius);




// CONSTRUCTOR FUNCTION.

function Circle (radius) {
    
    this.radius = radius;
    this.draw = function() {console.log(`draw`)};
};

const circle4 = new Circle(4);
console.log(circle4.radius);




// CONSTRUCTOR PROPERTY.
// Every object has a constructor property, and it returns a reference to the function used to create tahat particular instance object. The value of this property is a reference to the function itself, not a string containing the function's name. Note that this is a property of OBJECTS.



// VALUE VS REFERENCE TYPES.
// If we copy a value type vatiable into another variable, the second variable will have the value of the first.

let x = 10;
let y = x;
x = 20;

console.log(x, y); // X will be 20. Y will be 10. Cause we literally gave Y the first value of X.

// When working with REFERENCE TYPES VARIABLES, copying a variable into another will result into copying the address of the stored OBJECT.

let c = {value: 10};
let v = c;

c.value = 20;

console.log(c.value, v.value); // The result will be in either case `20`, cause each of the variables point to the same object.

// Increasing an object property into a function will have the value of the property increased outside of the function scope, cause we are referring at the same object even in the function.
let obj = {value: 20};

function increaseObj (obj) {
    obj.value ++;
};

increaseObj(obj);
console.log(obj.value); //21

// While increasing a value type variable into a function will result into havinbg the value increased only into the function scope, cause the value is copied into the parameter of the function, when called. 

let d = 1;

function increaseVar(number) {
    number ++;
};

increaseVar(d);
console.log(d); // 1

// PRIMITIVES (VALUES TYPES) ARE COPIED BY THEIR VALUE, OBJECTS ARE COPIED BY THEIR REFERENCE.



// ADDING OR REMOVING PROPERTIES. 

function Square(side) {
    this.side = side;
    this.draw = function() {console.log(`draw`)};
};

const square1 = new Square(2);

// We can access or add new properties to an existing object by using the DOT NOTATION or the BRACKET NOTATION.

square1.position = { x: 2 };
console.log(`square1 position`, square1.position);
// But this method only work when we know the name of the property, and we can't change it dinamically as a result of an expression or an operation.

// Using the BRACKET NOTATION is useful when dealing with dinamic key names or with key names that could be invalid js characters, like `center position` or `center-position`;
const propertyName = prompt(`what's the name of this new property for the square object?`);
square1[propertyName] = { x: 4 };

// Using the bracket notation without a variable require quotes;
square1[`height`] = 70;
console.log(square1); 

//  RESULT Square {
//   side: 2,
//   draw: [Function (anonymous)],
//   position: { x: 2 },
//   ciao: { x: 4 },
//   height: 70
// };

// You can delete a property from an object by using DELETE.

delete square1.side;    // Deleting using the dot notation.
delete square1[`draw`]; // Deleting using the bracket notation.



// ITERANTING (ENUMERATING) PROPERTIES.
// We can iterate over an object using the FOR...IN LOOP.

function Triangle(side) {
    this.sideOne = side;
    this.sideTwo = 3;
    draw = function() {console.log(`draw triangle`)};
};

const triangle1 = new Triangle(4);

for (key in triangle1) {
    console.log(`triangle`, key, triangle1[key]);
};

// We can only output the properties (without the methods), by using `tyoeof`.

for (key in triangle1) {
    if (typeof triangle1[key] !== `function`) console.log(`only properties`, triangle1[key])
};

// To check for the existance of a property or a method in an object we can use `in`, with the property name in quotes.
console.log(`sideOne` in triangle1); // true;
console.log(`sideThree` in triangle1); // false;



// ABSTRACTION.
// Private Properties and Methods;

// We can hide properties and methods inside an object to prevent users to modify them simply declaring them as a variable inside the constructor function.
 function NewSquare(side) {

    const position = 2;
    const newLocation = function(factor) {console.log(`new Location`, factor)};

    this.side = side;
    this.draw = function() {
        newLocation(3);
        console.log(`draw`);
        };

 };

 const squareTwo = new NewSquare(4);
 console.log(squareTwo); // Will only output side and draw, cause we can't access `position` and `newLocation` from outside the object.
 squareTwo.draw();

// We can refere to local variables declared into objects as PRIVATE MEMBERS.



// GETTERS  AND  SETTERS.

//  Getters let us return ceratin property or private members, while setters let us modify them from outside the object.

function Shop(items) {

    this.items = items;

    let defaultLocation  = { x: 0, y: 0 };

    this.position = function() {
        console.log(`position`);
    };

    Object.defineProperty(this, `getDefaultLocation`, {             // We use the `defineProperty` method of objects to add a function called  `getDafaultLocation` to return it.
        get: function() {
            return defaultLocation;
        },
        set: function(value) {                                      // Using SET to make defaultLocation.x accessible from outside the object.
            defaultLocation.x = value
        }
    })
};

const shop = new Shop(4);
console.log(`getDefaultLocation GETTER =>> `, shop.getDefaultLocation);
shop.getDefaultLocation = 3; 
console.log(`getDefaultLocation GETTER =>> `, shop.getDefaultLocation); 



