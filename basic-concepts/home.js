console.log('Hello');
// console.log('Hello World');
// alert('Hello Rajdeep')
// ============================


// Variables

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);


// Manipulate DOM with javascript
/* ... It's just a fancy way of
saying change HTML with javascript */

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;


// Numbers in javascript


console.log(5 * 10);
console.log(50 / 5);

// Declare a number
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;

console.log(num1);

// Divide /, Multiply *, Remainder %

console.log(num1,"/ 4 = ",num1/4);
console.log(num1,"% 4 = ",num1%4);
console.log(num1,"* 4 = ",num1*4);

// Increment Decrement by any number
num1 += 10;
console.log(num1);

/* Functions in javascript
1) Create function
2) Call function */

// Create
function fun() {
    console.log('This is a function');
}

// Call
//fun();

/* let's create a function that take in a name
and returns Hello followed by the name

for example

Name: Rajdeep
Returns: "Hello Rajdeep"
*/

function greetings(yourName) {
    //var name = prompt('What is your name?');
    var result = 'Hello' + ' ' + yourName; // String concatenation
    console.log(result);
}
//var name = prompt('What is your Name?');
//greetings(name);

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(20, 30)


/* While loop

var num = 0;

while(num < 100) {
    num += 1;
    console.log(num);
}

*/

/* For lop
for (let num = 0; num < 100; num++) {
    console.log(num);
}
*/

// Data Types
let yourAge = 18;                               // number
let yourName = "Bob";                           // string
let name = {first: 'Jane', last: 'Doe'};        // Object
let truth = false;                              // Boolean
let groceries = ['Apple','Banana','Oranges'];   // Array
let random;                                     // Undefined
let nothing = null;                             // value null

// Strings in javascripts ( common methods )
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple\norange';       // New line \n
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,4));                  // including - upto
console.log(fruit.replace('ban','123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));                  // Split by comma
console.log(fruit.split('n'));                  // Split by a character


// Array
let fruits = ['banana','apple','orange','pineapples'];
//let fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);                         // Access value at index 2

fruits[0] = 'pear';
console.log(fruits[0]); 

// Array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits);      // Removes last item
console.log(fruits.push('blackberries'), fruits);
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
console.log(fruits[4]);


let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 11, 2, 88, 9, 18, 23, 50, 17, 88];
console.log(someNumbers.sort(function(a, b) {return a-b})); // Ascending
console.log(someNumbers.sort(function(a, b) {return b-a})); // Descending

let emptyArray = new Array()