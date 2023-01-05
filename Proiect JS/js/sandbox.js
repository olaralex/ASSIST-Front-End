// matrix

// const line  = [1, 0, 1, 0];

// for(let i = 0; i < line.length; i++)
// {
//     console.log(line);
// }

// switchs

// const favFood = 'pasta';

// switch(favFood)
// {
//     case 'pasta':
//         console.log('You have the best taste in Italian foods!');
//         break;
//     case 'tochitura':
//         console.log('You have the best taste in Bucovinian foods!');
//         break;
//     case 'mici':
//         console.log('You have the best taste in Romanian foods!');
//         break;
//     default:
//         console.log('You DONT have taste in foods!');
// }

// matrix 2

// const matrix = [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]

// for(let i = 0; i<matrix.length; i++)
// {
//     console.log(matrix[i])
// }

// Functions

// function hello(){
//     console.log('hello');
// }

// hello();

// Function Expression

// const hi = function(){
//     console.log('hi');
// };

// hi();

// Introducing Parameters To Functions

// const sayHelloTo = function(name = 'User' /* Default Parameter */){
//     console.log(`hello ${name}`);
// };

// sayHelloTo('Alex');

// // Returning Values

// const whoIsBigger = function(a = NaN, b = NaN){
//     if(a<b){
//         return b;
//     }
//     else if(a<b){
//         return a;
//     }
//     else{
//         return;
//     }
// };

// let a = whoIsBigger(1, 2);
// console.log(a);

// let b = whoIsBigger();
// console.log(b);

// const compareNumbers = function(x = NaN, y = NaN){
//     if(x>y){
//         console.log(`${x} is greater than ${y}!`);
//     }
//     else if(x<y){
//         console.log(`${y} is greater than ${x}!`);
//     }
//     else if(x===y){
//         console.log(`${x} and ${y} are equal!`);
//     }
//     else{
//         console.log('Please insert a number!');
//     }
// };

// compareNumbers(1, 2);

// compareNumbers();

// Arrow Funtions

// const calcPerimeter = (L,l) => {
//     return L * l;
// };

// const c = calcPerimeter(4,3);
// console.log(c);

// Callbacks And Foreach

// const fruits = ['apple', 'grapes', 'oranges', 'pears'];

// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

// const indexOf = ((fruit, index) => console.log(`Index of ${fruit} is ${index}`));

// fruits.forEach(indexOf); // Arrow the function 

// Put datas into the browser

// const ul = document.querySelector('.numbers');

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let html = ``;

// numbers.forEach(number => html += `<li>${number}</li>`);

// console.log(html);

// ul.innerHTML = html;

// Objescts

let car = {
    // literal
    combustion: 'gas',
    fabYear: 2014,
    brand: 'Mercedes-Benz',
    color: 'white',
    specs: [
        {specName: '3.0L engine', cost: '$$$'},
        {specName: 'xenon lights', cost: '$'},
        {specName: '4x4', cost: '$$'}
    ],
    // methods
    turnOn: function() {
        console.log('the car has turned ON!');
    },
    turnOff: function() {
        console.log('the car has turned OFF!');
    },
    showSpecs: function() {
        console.log('Specs of the car and the price are:')
        this.specs.forEach(function(spec){
            console.log(spec.specName + ', ' + spec.cost);
        });
    }
};

console.log(car);

car.turnOn();

car.showSpecs();

car.turnOff();

// Relative values

person = {
    age: 18,
    nationality: 'Romanian'
}

const personOne = person;
const personTwo = personOne;

console.log(personOne, personTwo);

personOne.age = 20;

console.log(personOne, personTwo);
