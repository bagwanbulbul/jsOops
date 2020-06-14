function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}
Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName)
{
    Person.call(this, firstName, lastName);
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
var std = new Student("James","Bond");           
console.log(std.getFullName());
