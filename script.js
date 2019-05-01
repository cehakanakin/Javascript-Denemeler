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
/*
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
*/


/******************
 * Boolean Logic
 */
/*
 var firstName = 'John';
 var age = 20;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
 } else {
    console.log(firstName + ' is a man.');
 }
*/


/***************
 * The ternary Operater and Switch Statements
 */
/*

 // Ternary Operater
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drikns beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */
/*
// Switch Statement
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;    
    default:
        console.log(firstName + ' is a man.');
}
*/


/*************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}


// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

var totalJohn, totalMike, averageJohn, averageMike, totalMary, averageMary, winnerAverage;

totalJohn = 110 + 120 + 103;
totalMike = 116 + 94 + 123;

averageJohn = totalJohn / 3;
averageMike = totalMike / 3;

console.log(averageJohn, averageMike);

if (averageJohn > averageMike) {
    console.log('Team John is the winner with ' + averageJohn + ' average points');
    winnerAverage = averageJohn;
} else if (averageMike > averageJohn)  {
    console.log('Team Mike is the winner with ' + averageMike + ' average points');
    winnerAverage = averageMike;
} else if (averageJohn === averageMike) {
    console.log('It\'s draw with equal ' + averageJohn + ' points.');
    winnerAverage = averageMike;
}

totalMary = 97 + 134 + 105;
averageMary = totalMary / 3;

console.log(averageMary, winnerAverage);

if (averageMary > winnerAverage) {
    console.log('Team Mary is the winner with ' + averageMary + ' average points');
} else if (winnerAverage > averageMary)  {
    console.log('Team Mike is the winner with ' + winnerAverage + ' average points');
} else if (averageMary === winnerAverage) {
    console.log('It\'s draw with equal ' + averageJohn + ' points.');
} 


if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John\'s team is the winner with ' + averageJohn + ' average points.');
} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('Mike\'s team is the winner with ' + averageJohn + ' average points.');
} else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log('Mary\'s team is the winner with ' + averageJohn + ' average points.');
} else {
    console.log('It\'s draw with equal ' + averageJohn + ' points.');
}