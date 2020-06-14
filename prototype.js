function Student() {
    this.firstName = 'steve';
    this.lastName = 'job';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age); 
console.log(studObj1)

