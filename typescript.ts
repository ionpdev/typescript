// Type: 
// Easy way to refer to the different properties 
//  + functions that a value has

// Types:
// - Primitive Types"
//     number, boolean, void, undefined, string
//     symbol, null

// - Object Types:
//     functions, arrays, classes, objects

const today = new Date()
today.getMonth()

// - Type Annotations -
// Code we add to tell Typescript what type of
// value a variable will refer to
//
// - Type Interface -
// Typescript tries to figure out what type of 
// value a variable refers to

// - Annotations -
// with Variables
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null
const nothing: undefined = undefined
// built in objects
const now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use: Type annotations:
// 
// When declare a variable on one line, then initialize it later
// When we want a variable to have a type that can't be inferred
// When a function returns the 'any' type and we need to clarify the value
//

// 1) Function that returns the 'any' type
//

// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json)
// console.log(coordinates) // {x: 10, y: 20}

// what is 'any'
// 
// A type, just as 'string' or 'boolean' are
// Means TS has no idea what this is - can't
// check for correct property references

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
 }

//  3) Variable whose type cannot be inferred correctly
let numbers = [-19, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}

// 
// 
// Functions
// 
// Type annotations for functions - code we add to tell Typescript
// what type of arguments a function will receive and what type of values
// it will return
// 
// Type inference for functions - Typescript tries to figure out what type
// of value a function will return.

const add = (a: number, b: number) : number => {
  return a + b;
}

function divide(a: number, b: number) : number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b
}

// void and never

const logger = (message: string) : void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

// Destructuring 
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = ( { date, weather } : { date: Date, weather: string }) : void => {

  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)

// 
// Objects
// 
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  }
}
// destructuring
const { age } : { age: number } = profile

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile



// 
// Arrays
//
// Typed Arrays - arrays where each element is some
// consistent type of value

const carMakers: string[] = ['ford', 'toyota', 'chevy']

const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['350'],
  ['camry'],
]

// Help with inference when extracting values

const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Why do we care ?
// 1. TS can do type inference when extracting values from an array
// 2. TS can prevent us from adding incompatible values to the array
// 3. We can get help with 'map', 'forEach', 'reduce' functions
// 4. Flexible = arrays can still contain multiple different types

// multiply types in array
const importantDates: (Date | string)[] = []
importantDates.push('2030-10-20')
importantDates.push(new Date())

// Where to use typed arrays ? - Any time we need to represent a
// collection of records with some arbitrary sort order

//
// Tuples
// 
// array like structure where each element represents some property
// of a record.
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['brown', false, 50]

// *

// Interface
// 
// Interfaces + Classes = How we get really strong code reuse in TS
// 
// Interfaces -> Creates a new type, describing the property names
//    and value types of an object.
//

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drinks)

// General Strategy for Reusable Code in TS:
// 1. Create functions that accept arguments that are typed with interfaces
// 2. Objects/classes can decide to 'implement' a given interface to work
//    with a function.


// *

// 
// Classes 
// 
// Blueprint to create an object with some fields,
// (values) and methods (functions) to represent a 'thing'
// 
class Vehicle {

  constructor(public color: string) {

  }

  protected honk(): void {
    console.log('honk')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car2 extends Vehicle{

  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car2 = new Car2(4, 'red')

car2.startDrivingProcess()

// Modifiers
// Instance Method Modifiers
// 
// public
// private
// protected

// Fields with Inheritance


// 
// Generics
// 
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<string>(['a','b','c'])

// Example of Generics with functions
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
  printAnything<string>(['a', 'b', 'c'])

// Generic Constraints
class Cars {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHousesOrCars<House>([new House(), new House()])
printHousesOrCars<Cars>([new Cars()])

// 
// Decorators
// 
  // - Functions that can be used to modify/change/anything
  // different properties/methods in the class
  // - Not the same as JavaScript Decorators
  // - Used inside/on classes only
  // - Understanding the order in which decorators are ran are the key
  // to understanding them
  // - Experimental 

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError('Opps, the boat was sunk')
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function() {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()

// 
// Metadata
// 
// using pkg: reflect-metadata

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane)

const note = Reflect.getMetadata('note', plane)

console.log(note)
// 
class Plane2 {
  color: string = 'red'

  @markFunction
  fly(): void {
    console.log('vrrrrrrrrr')
  }
}

function markFunction(target: Plane2, key: string) {
  Reflect.defineMetadata('secret', 123, target, key)
}

const secret = Reflect.getMetadata('secret', Plane2.prototype, 'fly')

console.log(secret)

