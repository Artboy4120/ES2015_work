const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

//// Rest Spread Ex///

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];


// removeRandom
const removeRandom = (items) => {
    const index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
  };
  
  // extend
  const extend = (array1, array2) => [...array1, ...array2];
  
  // addKeyVal
  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
  
  // removeKey
  const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  };
  
  // combine
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
  
  // update
  const update = (obj, key, val) => ({ ...obj, [key]: val });

  // Object Enchancements Ex//

  // ES5
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    };
  }
  
  // ES2015
  const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName,
  });

  
  // ES5
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!";

// ES2015
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};



// ES5
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  
  // ES2015
  const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };
  


  // ES5
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  
  // ES2015
  const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };
  


  const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
      return noise;
    },
  });
  


  //Destructing//

  console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


//facts has two properties when we desstructure we create two new variables

console.log(discoveryYears); // { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

//numPlanets will be assigned the value of 8 and discovery will be assigned and object with the rest of teh Properties of planetFacts


getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // "Your name is Alejandro and you like purple"
getUserData({firstName: "Melissa"}) // "Your name is Melissa and you like green"
getUserData({}) // "Your name is undefined and you like green"

// The getUserData function accepts an object with properties firstName and favoriteColor with the default value of "green". If the favoriteColor property is not provided, it will take the default value "green".

//Array Destructuring 1

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

//The variables first, second, and third will be assigned the corresponding values from the array ["Maya", "Marisa", "Chi"].

//Array Destructuring 2



console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


//The variables raindrops and whiskers will be assigned the first and second values from the array, respectively, while aFewOfMyFavoriteThings will be assigned an array containing the rest of the elements after the first two.

//Array Destructuring 3

console.log(numbers) // [10, 30, 20]

//The values at index 1 and 2 of the numbers array are swapped using array destructuring. The array becomes [10, 30, 20].



///2015 Refactinger//

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  


  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const { numbers: { a, b } } = obj;
  

  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];


const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });
