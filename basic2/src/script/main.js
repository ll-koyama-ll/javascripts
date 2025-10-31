// const sayHello = name => console.log(`Hello, ${name}!`);

// sayHello('John');
// sayHello('Paul');


// import { triangle, circle } from "./modules/area";
// console.log(triangle(3, 8));
// console.log(circle(10));


import * as area from './modules/area';
console.log(area.triangle(3, 8));
console.log(area.circle(10));