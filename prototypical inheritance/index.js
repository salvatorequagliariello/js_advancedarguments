// CREATE YOUR OWN PROTOTYPAL INHERITANCE.
// We can define the prototype of a given object (to let it inherit all the prototype method), using the `.create` object method.

function Shape() {
    this.draw = function() {
        console.log(`draw`);
    };
};

function Circle(radius) {
    this.radius = radius;
};


Circle.prototype = Object.create(Shape.prototype); // Applying here the method.

Circle.prototype.say = function(){
    console.log(`Hello`);
};

const c = new Circle(3);
const s = new Shape();

// When you change the prototype of an object you should also change its constructor back to as it was before, using the `.constructor` property and setting it to the name of the CONSTRUCTOR FUNCTION used to create the object initially.
Circle.prototype.constructor = Circle;
// The prototype will be the one you switched to, but its constructor will now be again the right one.

// We can create a function to create inheritance and change the constructor function of a child to avoid error in the code, using the parent and the child as parameters.

function extend (Parent, Sub) {
    Sub.prototype = Object.create(Parent.prototype);
    Sub.prototype.constructor = Sub;
};

extend(Shape, Circle); // Here we call the function.



// MIXINS.
// We know that in javascript we can only inherit from  a single class/object. So there can be only a PROTOTYPE fon an object. But what if we need to inherit methods from more than one object? We can use MIXINS to do that. A mixin is a class/object containing useful methods that can be used by other classes/objects using the .assign OBJECT METHOD without inherit from them.

// We can assign multiple mixin (objects) to a single object/class.

const canEat = {
    eat: function () {
        this.hunger --;
        console.log(`eating`);
    }
};

const canWalk = {
    walk: function() {
        console.log(`walking`);
    }
};


// Here we can create a new object from scratch directly assigning the method .assing to a variable.
const person = Object.assign({}, canEat, canWalk);

// Or we can assign the mixins to a new constructor, with no declaration and the name of the object with the prototype method as argument of the first parameter of the .assign method.

const canSwim = {
    swim: function() {
        console.log(`swimming`);
    }
};

function Goldfish(weight) {
    this.weight = weight
};

Object.assign(Goldfish.prototype, canEat, canSwim);

const g = new Goldfish(3); // Now g can swim and can eat.

// We can also create a function to simplify this process and put dinamically created mixin as arguments, using a rest operator for mixins. 

function mixin(target, ...sources) {
    Object.assign(target, ...sources)
};

mixin(person, canSwim, canEat, canWalk); // Noeìw person can even swim.

