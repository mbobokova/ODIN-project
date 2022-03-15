console.log("Hi everyone! ...");
let message;

message = "Putin is sociopath";

console.log(message);

let user = "Macka",
    age = "99";

message = "Hi.";

console.log(message);

message = user;

console.log(message);

/*

let lett = 5; // can't name a variable "let", error!
let returnn = 5; // also can't name it "return", error!
alert(returnn+lett);

//declare a constant (unchanging) variable use const
const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; - cant change


/* TASK */
!(function () {
    let name = "Suzy";
    let admin = name;

    //alert(admin);
})


/* string and number 
    let myNumber = '74';
    typeof myNumber;
    let myNumericNumber = Number(myNumber)
    typeof myNumber;


    console.log(23 + 97);
    let math = ((4 + 6 + 9) / 77);
    console.log(math);
    console.log(math.toFixed(2));
    let highMatch = 3 ** 3;
    console.log(highMatch);
*/
//

let max = 57,
    actual = 13;

let percentage = max / actual;
console.log("result is",percentage.toFixed(3), "%");

/* Backticks 

    let nick = "\"Macka\"";

    //embed a variable
    alert( `Hello, ${nick}!` ); // Hello, John!

    //embed an expression
    alert( `the result is ${1 + 2}` ); // the result is 3

*/

let isGreater = 4 < 1;

alert( isGreater ); // true (the comparison result is "yes")


//


const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);