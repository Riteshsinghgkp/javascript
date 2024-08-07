

// singleton


/*
const obj1 = {1:"one",2:"two"}
const obj2 = {3:"three",4:"four"}
const obj3 = {5:"five",6:"six"}

const obj4 = {...obj1,...obj2,...obj3}  // spred operator

console.log("obj4 is",obj4);

*/

/******************************** Object Nesting ************************/

const person = {
    details:{

    name: {
      firstName: "Ritesh",
      lastName: "Singh"
    },
    address: {
      city: "Gorakhpur",
      country: "INDIA"
    },
    hobbies: ["reading", "traveling", "sports"],

    contact:{
        email: "ritesh@gmail.com",
        phone: "9517118016"
      },
    },
  };
// console.log(person.details);

// console.log( typeof person);

console.log(person);
console.log(Object.keys(person.details));     //! important , yha pe jitni keys hain wo sb array me store ho gayi hain .
console.log(Object.values(person.details));   // ye saare object k value ko show kr deta hai aur ek array mein store kr deta hai .

console.log(Object.entries(person.details));  // yha pr kya hota hai hr ek key value ko array bna diya jaata hai

console.log(Object.values(person.details));

// console.log(person.hasOwnProperty("city"));





/**************************** object destuctor *******************************/


const person2 = {
    name:"little",
    age:22,
    city:"Gorakhpur"
}


// destructing
const {name,age,city} = person2;
// Destructuring makes it easy to work with object properties directly.
// console.log(name);
console.log(city);
console.log(age);

/* Renaming Variables:
You can rename the variables while destructuring:   */

const {name:fullname,} =person2
console.log(fullname);