
class myChild {
    constructor(name){
        this.name = name;
    }
    getBaccha(){
        return this.name;
    }
}
let babyName = new myChild("Akon o Biye Kori nai");
console.log(babyName.getBaccha());

class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Haire Kopal");
console.log(baby.getFullName());
console.log(baby2.getFullName());