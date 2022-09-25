// console.log("Hello Javascript");

// Variables

var a = 10;
console.log(a);

let myVariable = "Muktesh";
console.log(myVariable);

const c = 100;
console.log(c);

let mynames = "Messi"; //Strings
console.log(mynames);
let boolean = true; //Boolean
console.log(boolean);

let myarray = ["Messi", "Pele", 10];
console.log(myarray);

let myDict = { firstName: "Lionel", lastname: "Messi" }; //Dictionary
console.log(myDict);
console.log(myDict.firstName);

//Functions

function addition() {
  let a = 10;
  let b = 25;
  add = a + b;

  document.getElementById("first").innerHTML = add;
}

summation = addition();
console.log(summation);

var sum = (x, y) => {
  return x + y;
};

let s = sum(10, 23);

console.log(s);

let goals = 30;

if (goals < 10) {
  console.log("Bad Season");
} else if (goals < 20) {
  console.log("Average Season");
} else {
  console.log("Good Season");
}

//  We can use == to compare values and === to compare value and data type
let todaysday = new Date().getDay();
console.log(todaysday);
switch (todaysday) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);

    break;
  case 3:
    day = "Wednesday";
    console.log(day);

    break;
  case 4:
    day = "Thursday";
    console.log(day);

    break;
  case 5:
    day = "Friday";
    console.log(day);

    break;
  case 6:
    day = "Saturday";
    console.log(day);
}

// Loops
// SUm of first 10 natural numbers
let j = 1;
let nsum = 0;
for (j = 1; j <= 10; j++) {
  nsum = nsum + j;
  console.log(j);
}

console.log("The Sum is:", nsum);
