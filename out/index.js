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
            if (this.make[x] && this.model[x]) {
                console.log(`This NCycle has a ${this.make[x]} ${this.model[x]} at ${x}.`);
            }
            else {
                console.log("This NCycle was not created properly.");
            }
        }
        else {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
    }
    printAll() {
        if (this.make instanceof Array && this.model instanceof Array) {
            this.make.forEach((m, i) => {
                if (this.model[i]) {
                    console.log(`This NCycle has a ${m} ${this.model[i]} at ${i}.`);
                }
            });
        }
        else {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
    }
}
const myNCycle = new NCycle(["Yamaha", "Honda"], ["R1", "CBR"]);
myNCycle.print(1);
myNCycle.printAll();
//PART 4 
//not exactly sure what was meant by test your code and the testing provided has slipped my mind. Going to do more research on this.
