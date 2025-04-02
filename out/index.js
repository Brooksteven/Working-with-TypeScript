//@ts-check
class Vehicle {
    constructor(make, model, wheels) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
//Adjust the Car and MotorCycle classes, as needed according to any TypeScript errors
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, 4);
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
//am I able to put any to represent string, string, and number for Vehicle above?
function printStatus(vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
//PART 3
//Modify NCycle to accept a generic type.
class NCycle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    print(x = 0) {
        if (this.make instanceof Array && this.model instanceof Array) {
            console.log(this.make[x] && this.model[x] ?
                "This NCycle has a ${this.make} ${this.model} at ${parameter}." : "This NCycle was not created properly.");
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    }
}
