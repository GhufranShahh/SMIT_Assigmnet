// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//Q
function rightNow(){
    var now = new Date();
    console.log(now)
}
rightNow();

//Q
function noSuqares(num1) {
    document.write(`The square of ${num1} is ${num1*num1}`);
}
noSuqares(4); 
document.write('<br>')

//Q5
function factorial(number){
    if(number < 0){
        document.write('Error! Fac(torial for negative number does not exist');
    }else if(number === 0){
        document.write(`The factorial of ${number} is 1`);
    }
    else{
        let fact = 1;
        for(i =1 ;i<= number; i++){
            fact *= i
        }
        document.write(`The factorial of ${number} is ${fact}`)
    }
}     
var number = parseInt(+prompt('Enter the positive number?'));
factorial();
document.write('<br>')

//Q
function factorial(number){
    var fact =1;
for(var i=2; i<=number; i++){
    fact *= i;
}
return fact;
 }
var enterNumber = +prompt('Enter the number to find its factorial');
var result1 = factorial(enterNumber);
document.write(`Factorial of ${enterNumber} is ${result1}`);
//Q
var i = 1
for ( i = 1; i < 11; i++) {
    console.log(i)
}

//Q
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
//Q
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
//Q
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));
//Q
function validate(age){
    var ans="not eigible";
    if(age>=18){
        ans="eligible";
    }
    return(ans);
}
var age=parseInt(prompt("Enter age"));
var status=validate(age);
document.write("You are <b>"+status+"</b> for Vote");
//Q
// constructor function
function Person (Person_name,Person_age) {
    this.name = Person_name,
    this.age = Person_age,
}

// create an object
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'male');







































