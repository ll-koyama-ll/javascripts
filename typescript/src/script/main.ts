const sayHello = (name: string) => console.log(`Hello, ${name}！`);
// (name: string) ここがtypescriptである。変数の型をつけるのがtypescript

sayHello('John');
sayHello('Paul');


let num: number; // 数字
let str: string; // 文字列
let bool: boolean; // 真偽（Yes/No）

const addNumber = (left: number, right: number): number => {
    return left + right;
}
console.log('合計した数字：' + addNumber(5, 5));

// import { triangle, circle } from "./modules/area";
// console.log(triangle(3, 8));
// console.log(circle(10));


// import * as area from './modules/area';
// console.log(area.triangle(3, 8));
// console.log(area.circle(10));