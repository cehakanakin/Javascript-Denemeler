/*********************
 * Variables and data types
 */

 /*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/*************************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*************************
 * Basic Operators
 */
/*
var year, yearJohn, yearMark, ageJohn, ageMark;
year = 2019;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);


// Logical operators
var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);
*/

/*************************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);     

// Multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);
*/

/**************
 * CODING CHALLENGE 1
 */
/*
var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, isMarkBmiHeigher;

markMass = 78; // kg
markHeight = 1.69; //  meter
johnMass = 92;
johnHeight = 1.95;

// BMI Formula is BMI = mass / height^2 = mass / (height * height).

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

isMarkBmiHeigher = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than Jhons\'s BMI? ' + isMarkBmiHeigher);
*/

/************************
 * If else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, isMarkBmiHeigher;

markMass = 78; // kg
markHeight = 1.69; //  meter
johnMass = 92;
johnHeight = 1.95;

// BMI Formula is BMI = mass / height^2 = mass / (height * height).

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

// isMarkBmiHeigher = markBMI > johnBMI;

// console.log('Is Mark\'s BMI higher than Jhons\'s BMI? ' + isMarkBmiHeigher);






