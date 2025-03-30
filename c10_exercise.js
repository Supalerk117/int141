//c10_exercise.js
 
/*
1. write an object with a class definition (Computer) with properties: memory, SSD
and a method named upgrade with 2 parameters: property and value
(e.g., upgrade('memory',32)) that will upgrade respective existing property.
 
2. add static property named totalMemory to the class definition and
and static method named getTotalMemory.  This static totalMemory will sum
the memory of all computer and update everytime that the memory is updated.
*/
 
 
class Computer {
    static totalMemory = 0;
    constructor(memory, SSD) {
        this.memory = memory
        this.SSD = SSD
    }
 
 
upgrade(property, value){
if (property === "memory")
    {
        if (this.memory >= value) {
            console.log(`invalid value`);
            return
        }
        Computer.totalMemory += value - this.memory
        this.memory = value
        console.log(`${property} has change to ${value}`)
    }
else if (property === "SSD")
    {
        this.SSD = value
        console.log(`${property} has change to ${value}`)
    }
else {
    console.log(`property not found`)
}
}
 
static getTotalMemory () {
     console.log(Computer.totalMemory)
}
 
}
 
    // if (this.HaveOwnProperty(property)) {
    //     this[property] = value;
    //     console.log(`${property} has change to ${value}`)
    // }
    // else {
    //     console.log(`Property ${property} not found`)
    // }
 
const myCom = new Computer(16, 512);
console.log(`before upgrade :${myCom.memory} , SSD = ${myCom.SSD}`)
myCom.upgrade('memory', 32);
console.log(`After upgrade :${myCom.memory} , SSD = ${myCom.SSD}`)
 
Computer.getTotalMemory()