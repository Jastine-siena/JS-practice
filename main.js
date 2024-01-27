//console.log("hello world")
//console.error("hello world")
//console.warn("hello world")

//variables

var Name = "Pedro"
var Name= "Laden"
const val= 666
console.log(Name)
console.log(val)


//data types
const Name1 = "Jastine"
const Age = 22;
const Rating = 50;
const isComplete = true;
const Val= null;
const unk = undefined;
let library;
library = "Manila City"
let address= "Bagtingon, Buenavista, Marinduque"

console.log(typeof Age)
console.log(typeof library)

//string manipulations
let statement= `My name is ${Name1}, currently ${Age} years old and living in barangay ${address}.`
console.log(statement)

console.log(Name1.length)
console.log(Name1.toLocaleLowerCase(Name1))
console.log(Name1.toLocaleUpperCase(Name1))

const Fruits = ["Apple", "Mango", "Grapes", "Mangosteen"];
Fruits.unshift("santol")
Fruits.push("Dalandan")
Fruits.pop()
console.log(Fruits)
console.log(Array.isArray(Fruits))
console.log(Fruits.indexOf("Apple"))
Fruits.splice(1, 2);
console.log(Fruits)

