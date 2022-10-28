// Two of inherite have
// ==one== Prototype inheritance
// ==two== Constructor Inheritance


// function inheritance in prototype based
var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    thsi.job = job
}

Person.prototype.dob=function(currentYear){
    console.log(this.name + ' was  born in ' + (currentYear-this.age))
}

var abir = new Person('Abir Islam', 23, 'Student')
console.log(abir)
abir.dob(2022)

Person.prototype.address = 'Bangladesh';
console.log(abir.address)
// for better experience run this last console on your browser console...