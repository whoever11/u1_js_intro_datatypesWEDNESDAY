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
//let fruits = [`apple`, `banana`, `orange`, `strawberry`, `kiwi`, `grapes`,
//`mango`, `pineapple`, `pear`]//array list practice
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


//fruits.splice(0,2,'dragonfruit', 'avacado' )//.splice() will remove orange and strawberry and add dragonfruit and avacado
//console.log(fruits)

//control Flow & Loops AFTERNOON CLASS WEDNESDAY JANUARY 17, 2024
//let weather = "snowy"

//if () {}//basic set up for if statements in javascript

//if (weather == "snowy"){
    //console.log("brr its cold")
//}
// = is for variables == is for comparison or to check if something is equal to something else
//below is if else statment on voting (line 91-97)
//let age = 10

//if (age >=18) {
    //console.log("you can vote")
//} else {
    //console.log("you cannot vote")
//}

//when working with out variables
//we use single = to assign a value
// to test a variable is == or === (triple equals)
//the == checks value
//the === checks value and type

//const dayOfWeek = 'Monday';

//if (dayOfWeek === 'Monday') {
  //console.log('Its Monday, better get to class!');
//} else if (dayOfWeek === 'Saturday') {
 // console.log('Its Saturday, party on!');
//} else {
  //console.log(`Please enter another day!`);
//}
//=> Its Monday, better get to class!
// const yourMoney = 100
// const catPrice = 100
//  if (yourMoney <=catPrice) {
//      console.log("you cannot buy the cat")
//  } else {
//      console.log("you can buy the cat")
//  }
// const yourMoney = 100
// const catPrice = 100
// if (yourMoney >= catPrice) {
//     console.log("you have just enough to buy a cat");
// } else {
//     console.log("you can't buy the cat");
// }
// const yourMoney = 200
// const catPrice = 100
// if (yourMoney >= catPrice){
//     console.log("you can buy a cat and will have dollars left over");
// }
// else {
//     console.log("you can't buy the cat");
// }

// TIME TO USE && || AND ! TO TEST multiple conditions

// let age = 22

// if (age > 20 && age <=13) {
//     console.log('you are a teenager')
// }

// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday' || dayOfWeek === 'Wednesday') {
//     console.log(`It's ${dayOfWeek}, better get to class!`);
// } else if (dayOfWeek === 'Tuesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
//     console.log(`Today is ${dayOfWeek}, no class tonight!`);
// } else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
//     console.log('It\'s the weekend!!');
// } else {
//     console.log('Please enter another day!');
// }
//=> It's Monday, better to get to class!

// let age = 22
// // Ternary Operator(cooler way to write code cleaner)
// age > 18 ? console.log('you can vote') : console.log('you cant vote')

// switch statement can be used for multiple branches based on === equality
//ex below
// const food = 'steak'
// //if() {}(just showing compared to switch not needed for switch statement)
// switch (food) {
//     //case - what we are testing
//     //action - what we are doing
//     //break - stops the switch statement
//     case 'chicken':
//         console.log( 'Ill have the chicken marsala')
//         break;
//      case 'steak':
//             console.log('ill have the steak, rare please')
//             break;
//     case 'vegetarian':
//             console.log('ill have the risotto with mushrooms')
//             break;
//     default:
//             console.log('please the valid entree')
// }
//LOOPS AFTERNOON LESSON
//for loops(used most of the time)
//while loops(harder to use)
//if (){}(for which is for loop looks the same)
//switch (){}
//ex below
//i ++ means we are going up each time by 1 
// math.round means round to the nearest whole number

// for (let i = 0; i <=10; i++) {
//     console.log(`your total for your items is ${i *1.085}`)
// }


// const food = ['pizza', 'tacos', 'sushi', 'soup', 'salad', 'pasta']

// for (let i = 0; i < food.length; i++){
//     console.log(food[i])
// }

const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]
for(let i = 0; i < wizards.length; i++){
    if(wizards[i].house === "Slytherin"){
        console.log(wizards[i].name);
    }
}