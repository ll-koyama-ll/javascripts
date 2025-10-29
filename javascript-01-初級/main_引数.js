function sayHello(name = 'John Doe') {  // John Doe は「名無しの権兵衛」の意味
    console.log(`Hello, ${name}!`);
}
sayHello('John');
sayHello('Paul');
sayHello();

function addNumber(x, y) {
    console.log(x);
    console.log(y);
    console.log(x + y);
}
addNumber(3, 5);

//...args(引数の意味) にすることで、何個かわからん配列も使える。
function doSomething(...args) {
    console.log(args);
}
doSomething(0, 1, 2);
doSomething(3, 4, 5, 6);
doSomething(7);