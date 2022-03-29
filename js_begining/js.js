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
function admin () {
    let name = "Suzy";
    let admin = name;

    //alert(admin);
}


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

// alert( isGreater ); // true (the comparison result is "yes")


//



let text = "What is apple?";
let partOfText = text.slice(-6,-1); //second number is position, not count from end
                                    // if is pos. negativ, count from end
console.log(partOfText);

partOfText = text.substring(8,13); //the same like slice without negative
console.log(partOfText);

partOfText = text.substr(8,6); // can by negative
console.log(partOfText);

let newtext = text.replace("apple", "plane") //returns new string
console.log(newtext)

let sentense = "Viola and Viola played LOL";
let newSentense = sentense.replace(/viola/i, "Denis"); // /i ignore upper-case 
console.log(newSentense);

let newSentenseSecond = sentense.replace(/Viola/g, "Denis").toUpperCase(); // /g replace all same words
console.log(newSentenseSecond);

//sentense = sentense.trim(); // remove whitespace from sides
let uff = sentense.charAt(0)
console.log(uff);
sentense = sentense.split("and"); //split string
console.log(sentense);

/* searching in string */ 
let anotherSentense = "Big dog is fluffy and dog is hungry."
let searchWord = "dog";
let indexOfWord = anotherSentense.indexOf(searchWord);

console.log(`you are looking for "${searchWord}" and thats is here: "${indexOfWord}" and here: "${anotherSentense.indexOf(searchWord, (indexOfWord + 1))}"`);

/* get date, hour */

const hour = new Date().getHours(); 
let greeting;

if (hour < 10) {
    greeting = "Good morning";
  } else if (hour < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

console.log(greeting) ;


/* get day - SWITCH*/
let day;
switch (new Date().getDay()) {
  case 1:    // "1" - can be conditional` 1>0 atp.
  case 2:
    day = "one of the worst days";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    day = "Weekend";
}
console.log("Today is " + day); 
if (day = "one of the worst days" || day > "Weekend") {
   // alert( 'The office is closed.' );
  }

  /* with months
  switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}
    */


/* login 
let user = prompt("who are you");
    console.log(user)*/

    const button = document.querySelector('button');
    

    function login() {
        const user = prompt('Who are you?');

        if (user == "admin" || user == "Admin") {

            const password = prompt('Put your password here:')

            if (password == "yoda123") {
                alert(`Thanks ${user}, you are Welcome here.`)
            }
            else {
                alert("wrong password")
            }
        }
        else if (user != null){            
                alert(`Hello ${user}, you are not registrated!`);        
        }
        else if (user == null){            
            alert(`Ok, ok, fill nothing!`);

        }
    }      
      button.addEventListener('click', login);


/* operator ? 
      let result;

        if (a + b < 4) {
        result = 'Below';
        } else {
        result = 'Over';
        }
//  let result = (a + b < 4) ? 'Below' : 'Over'; */


console.log("ha ha ha %c bu bu bu", "font-size: 25px; background:red;"); // %c - css

console.warn('oH nOoo');
console.error('shit!');
console.info('This is not important info.'); //not working
// console.clear();                            // working good 
console.log(button);
console.dir(button);                // ALL atributes +
// console.table(\object\)

function squared(num) {
    return num * num;
  }

console.log(squared(3));



/* return random value from array */

    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const dogs = ['beagle', 'golden retriever', 'jack russel', 'wolf']
    function random(random) {
        return random[Math.floor(Math.random() * random.length)]
    }
    /* OR :
    function chooseName(names) {
    return names[Math.floor(Math.random() * names.length)]

    }
    console.log(chooseName(names)); */
    console.log(random(names)); 
    console.log(random(dogs)); 

    function isShort(what) {
        return what.length < 5
    }

    console.log(isShort("falafel")); //false

    
    const shortNames = names.filter(isShort);
    console.log(shortNames);

/* draw rectangle 

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');

    const x = 50;
    const y = 60;
    const width = 100;
    const height = 75;
    const color = 'red';

    // Add your code here

    function draw() {

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    }
    draw();

    function drawBetter(x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
    drawBetter(20,20,70,70, "blue");
    drawBetter(0,0,30,30, "pink");
*/ 



function checkAge(age) {
    return (age > 18)? true: confirm('Did parents allow you?');
    }

    function checkChildhood(age) {
        return (age < 18) || alert('you are not child yet');
      }

/*
function min(x, y) {
    if (x<y) {
        return x;
    }
    else 
        return y;    
}
*/
function min(a, b) {
    return a < b ? a : b;
  }

  function pow(x, n) {
      return x**n
  }


  /* odin practice */
  //1
  function add7(x) {
      return x+7
  }
  console.log(add7(4));

  //2
  function multiply(a, b) {
      return a*b
  }

  //3
  const capitalize = (s) => {
    if (typeof s !== 'string') return 'its not string'
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  }

  //4
 const lastLetter = (text) => {
     if (typeof text !== 'string') return 'its not string'
     return text.charAt(text.length - 1)
 }

 /* solving Fizz Buzz 
 function fizzBuzz() {
    const nmbr = parseInt(prompt('Put your number'));
    if (nmbr % 3 == 0 && nmbr % 5 == 0) alert("FizzBuzz");
    else if (nmbr % 3 == 0) alert("Fizz");
    else if (nmbr % 5 == 0) alert("Buzz");    
    else return alert(nmbr)

   
 }

// IN LOOP
 let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
 */