let Name = "Jastine"
let Address= "Bagtingon, Buenavista, Marinduque"
let Age = 22;


let introduce  = (`Hi my name is ${Name.toLocaleUpperCase(Name)}, I lived in ${Address} and currently i am ${Age} years old I hope I make friends and colleges in this school`)
console.log(introduce)

console.log(typeof Name)
console.log (typeof Age)

const random_names = ["dan","sean","brax","jam","dark"]
random_names.unshift("greg")
random_names.pop()
random_names.splice(0, 2)
console.log(random_names)
console.log(random_names.indexOf("jam"))

//object literals

const Person = {
    Fname: "Jastine",
    Lname: "Siena",
    Mname: "DS",
    Age: 22,
    Favorites: ["Yellow", "Tinapay", "Calamansi Juice", "Pop Music"],
    Family : {
        Mother: "Ina ko",
        Father: "Ama ko",
        Sibling: "Charlie",
        Dogs_Name: "Tots"
    }
}

console.log(Person)
console.log(Person.Fname)
console.log(`Hi my name is ${Person.Fname.toLocaleUpperCase(Person.Fname)} and I am ${Person.Age} years old`)

console.log(Person.Family.Mother)
console.log(`My favorite juice is ${Person.Favorites[2]}`)

//array inside the object literals

const Contacts = [
    {
        ID: "abc",
        Fullname: "Yna",
        Postal_Code: 1234
    },
    {
        ID: "efg",
        Fullname: "Jam",
        Postal_Code: 8989
    },
    {
        ID: "xyz",
        Fullname: "Ced",
        Postal_Code: 6859
    }
]

console.log(Contacts[0].ID1, Contacts[2].Postal_Code)

//LOOPS

//for
for (let x = 0; x <=20; x++){
    console.log(x)
}

for (let x = 0; x < Contacts.length; x++){
    console.log(Contacts[x].ID,Contacts[x].Fullname, Contacts[x].Postal_Code)
}
//while
let y = 0;
while (y <= 10){
    console.log(`Using this loop the value of y is ${y}`);
    y++;
}

//conditional statements
const x = "90"

if(x == 100){
    console.log("x is 100")
}
else if(x <= 100){
    console.log("x is less than 100")
}


//function
let b= 100;
let d= 200;

function getsum(b, d){
        return b + d;
}
  
console.log(getsum(b,d))

//much better way in declaring function
//arrow functin

let sum = (d, f) => d+f;
console.log(sum(90, 20))

let speed = (times, distance) => times*distance;
console.log(speed(30,200))

//constructor

class Names{
    constructor(fname, mname,lname){
        this.fname= fname
        this.mname= mname
        this.lname = lname
    }

    getfullname(){
        return `${this.fname.toLocaleUpperCase(this.fname)} ${this.mname} ${this.lname.toLocaleUpperCase(this.lname)}`
    }
}

//instantiation

const Name1 = new Names ("ladin", "DS", "Siena")
console.log(Name1.getfullname())

//another way of constructor ( a better way)
function Cars(carbrands, carprice, caryear_release){
    this.carbrands = carbrands;
    this.carprice = carprice;
    this.caryear_release = caryear_release;
    
    this.getcars = () => {
        return `${this.carbrands}, ${this.carprice}, ${this.caryear_release}`
    }
}
const car1 = new Cars ("TOYOTA", "P2-M", "2022")
const car2 = new Cars ("FORD", "P1.5-M", "2018")

console.log(car1.getcars());

function MSC(Department, Dean, Student_Population){
    this.Department= Department
    this.Dean = Dean
    this.Student_Population = Student_Population

    this.getinfo = () => {
        return `${this.Department}, ${this.Dean}, ${this.Student_Population}`
    }
}

//instatiation

const MSC1 = new MSC("SICS", "Totoy", 800)
const MSC2 = new MSC("CABG", "Kiko", 1200)
const MSC3 = new MSC("Fisheries", "GengGeng", 500)

console.log(MSC1.getinfo())
console.log(MSC2.getinfo())
console.log(MSC3.getinfo())
