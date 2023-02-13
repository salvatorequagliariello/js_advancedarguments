

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
};

