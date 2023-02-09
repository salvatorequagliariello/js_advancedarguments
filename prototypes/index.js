// PROTOTYPAL INHERITANCE AND CHAINING.

// Setting the prototype (parent).
const animal = {
    eats: true,
    walk () {console.log(`aimal walk`)}
};


// Setting the prototype of rabbit as ANIMAL, it will inherit all of its methods and property (WALK and EATS), so if we will console.log `rabbit.eats` we well get `true`.
const rabbit = {
    jumps: true,
    __proto__: animal
};
console.log(rabbit.eats); // TRUE.
rabbit.walk(); // `animal walk`.


// Setting the prototype of `longEar` as RABBIT will get to it all of the property and methods of `ANIMAL` and `RABBITS`, cause it's possible to chain the inheritance.
const longEar = {
    earLength: 10,
    __proto__: rabbit
};
console.log(longEar.eats); // TRUE
longEar.walk();  // animal walk.
console.log(longEar.jumps); // True;

console.log(Object.getPrototypeOf(longEar)); // Use the `getPrototypeOf` method of Object to see the arguments prototype.




// ITERATING ISTANCE AND PROTOTYPE MEMBERS.

function Circle (radius) {

// Instance members.

    this.radius = radius;

    this.move = function() {
        console.log(`move`);
    } 
};


// Prototype members.
Circle.prototype.draw = function() {
    console.log(`draw`);
};

const c1 = new Circle(1);

console.log(Object.keys(c1)); // Only returns instance members.

for (key in c1) console.log(key); // RETURN BOTH INSTANCE AND PROTOTYPE MEMBERS.

console.log(c1.hasOwnProperty(`radius`)); // To check instance properties.  RETURN TRUE.
console.log(c1.hasOwnProperty(`draw`)); //  RETURN FALSE, draw is a prototype member.
