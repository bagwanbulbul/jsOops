class person{
    constructor(){
        this.firstName = "unknown";
        this.lastName = "unknown";
    }
}
var person1 = new person();
person1.firstName = "bulbul";
person1.lastName = "bagwan";

console.log(person1.firstName+" "+person1.lastName);