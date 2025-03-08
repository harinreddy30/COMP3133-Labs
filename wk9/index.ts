import Student from "./IStudent";
import FullTimeStudent,  { COLLEGE } from "./FullTimeStudent";
import PartTimeStudent from "./PartTimeStudent";

console.log("Hello TypeScript")
var a = 100 //Number
console.log(a)

//a = "Hello"

var b:string
b = "Helloo"
var c:number = 100
var d:boolean = false
var e:String = "Hello"

function add(a:number, b:number): number {
    // return `${a}+ ${b}`
    return a + b
}

const sum = add(10, 20)
console.log(sum)
console.log(typeof sum)

let x:string | number //Union
x = 100
x = "Hello"
// x = true // Not allowed

let y:unknown

y = true

console.log(`${y} is boolean`)

if( typeof y === 'string'){
    console.log(`${y} is string`)
}else if( typeof y === 'number'){
    console.log(`${y} is number`)
}



var s1: Student 
s1 = {
    sid:1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true
}

console.log(s1)


var s: Student = {
    sid:1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true
}
var s2:FullTimeStudent = new FullTimeStudent()

s2.studentType = "FullTimeStudent"
s2.print()

//Type

type StringOrNumber = string | number

type ID = null | number
var x1: StringOrNumber = 100
x1 = "Hello"

var a1:ID = null
a1 = 100
//a1 = "Hellow"

type Address = {
    streeNo: number
    streeName: string
    city: string
    // postalCode: StringOrNumber
    postalCode: string
}

type Geo = {
    lat: number
    lng: number
    alt: number
}

type FullAddress = Address & Geo

var home: Address = {
    streeNo: 100,
    streeName: "Street Name",
    city: "TOR",
    postalCode: "M1M2M3"
}

var loc: Geo = {
    lat: 10,
    lng: 20,
    alt: 30
}
var fullhome: FullAddress = {
    streeNo: 100,
    streeName: "Street Name",
    city: "TOR",
    postalCode: "M1M2M3",
    lat: 10,
    lng: 20,
    alt: 30
}

//Class access

var pts1 = new PartTimeStudent(1, "Patel", 10.89, false, "PartTimeStudent - 1")
pts1.snm = "Pritesh Patel" 
// pts1.sid = 100 //Error readonly
// pts1.studentType = "evening sections" // Private
pts1.display()