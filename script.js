//Intro to Javascript
//Working with the Number datatypes
// + - * / % **
// we also have % called a modulo operator

// this is called string concatenation

//console.log("hello world")


//EIC=error in our code
//EIC=error in chair
//PebcaK=problem exists between chair and keyboard
//id10t= id10t error
//backtick is the key above the tab key VERY IMPORTANT FOR FUTURE CODING LINES LIKE LINE 33
//console.log('hello world'.length)

//defining Variables
//let, const, var
//let is a variable that can change
//const is a variable that cannot change
//var is a variable that can change
// let and const are main two, var can be seen as outdated 

//let age = 25
//let monthsInYear = 12
//let ageInMonths = age * monthsInYear
//let firstName = "Cj"
//syntactic sugar
//console.log(`My name is ${firstName} and I am ${age} years old.`)
//console.log(`hello my name is ${firstName} and I am ${ageInMonths} months old`)
//Literal
//console.log(`my name is ${firstName} and I am ${age} years old, next year I will be ${age+=1} years old`)

//console.log( "ten" + 10)

//let isTodayWednesday = true //boolean example
//let isTodayThursday = false //boolean example

//Logical Operators Below!
//&& - and
//|| - or
// ! - not
// if something doesn't exist it is either null or undefined 
//arrays are a list of items
//objects are a collection of key value pairs

//ARRAYS SECOND LESSON OF WEDNESDAY CLASS JANUARY 17,2024
// arrays let you collect, store data, reorder, and access data

//let friends = [`Moe`, `Larry`, `Curly`] //array list practice
//console.log(friends.length) will show all the friends
//console.log(friends[2]) // will show curly because you count from 0
//console.log(friends[3]) // will show undefined because there is no 3rd friend
//let firstFriend = friends[0]
//console.log(firstFriend.length)
//below is array methods fruits
let fruits = [`apple`, `banana`, `orange`, `strawberry`, `kiwi`, `grapes`,
`mango`, `pineapple`, `pear`] //array list practice
//console.log(fruits[fruits.length - 1]) //will show all the fruits in the array at the end fruit
//console.log(fruits.toString())//will show all the fruits in the array as a string(line in order in terminal)
//fruits.pop()//.pop()will remove the last fruit in the array
//fruits.push('peach')//.push() will add peach to the end of the array

//fruits.shift()//.shift() will remove the first fruit in the array and shift everything to the left

//fruits.unshift('blueberry')//.unshift() will add blueberry to the beginning of the array and shift everything to the right

//fruits.reverse()//.reverse() will reverse the order of the array

//.splice is very powerful
//it can add, it can remove, it can edit
//from any part of the array
//it will take 3 arguments
//where we started, where we stop, and what we're doing


fruits.splice(0,2,'dragonfruit', 'avacado' )//.splice() will remove orange and strawberry and add dragonfruit and avacado
console.log(fruits)