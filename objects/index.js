// DECLARING AN OBJECT.

// Object literal.
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1 
    },
    draw () {
        console.log(`draw`);
    } 

};



// Factory function.
function createCircle (radius) {

    return {
        radius,
        draw(){
            console.log(`draw`);
        }
    };


};

const circle1 = createCircle(1);
console.log(circle1);



// Constructor function.
function Circle (radius) {
    this.radius = radius;
    this.draw = () => {
        console.log(`draw`);
    };
};

const circle2 = new Circle (2);
console.log(circle2);



// ADDING OR REMOVING PROPERTIES.

const circle3 = new Circle (2);

circle.location = {x: 1}; // Adding. 
circle2[`location`] = {x: 1}; // Adding.

delete circle3.location; // Delete
delete circle2[`location`]; // Delete




// ENUMERATING PROPERTIES.

const circle4 = new Circle (5);

// To show the keys and the value of an object
for (key in circle4) {
    if (typeof circle4[key] !== `function`) console.log(key, circle4[key]); 
};

// Using the keys method of Object.
console.log(Object.keys(circle4));

// Checking if a given key exist in object.
const exist = (`radius` in circle4) ? true : false;
console.log(exist);




// ABSTRACTION (PRIVATE PROPERTIES AND METHODS).

function Circle2 (radius) {

    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};                 // Using a let to declare this two variables, we can use them into the object (without using `this`) but the will be invisible form the outside.
    let computeOptimumLocation = function (factor) {};

    this.draw  = () => {    
        computeOptimumLocation(0.1);                    // Use of the two declared variables.
        console.log(`draw`, defaultLocation)
    };

};

