function getTriangleArea (base, height){
    const area = (base * height) /2;
    return area;
}

const area1 = getTriangleArea(4, 5);
const area2 = getTriangleArea(2, 80);

console.log(area1);
console.log(area2);


// 関数、どっちにしろ、先に宣言したほうがいいよ。
// 関数宣言 後ろで宣言してもOK
function doSomething () {
    //何かする
}

// 関数式 後ろで宣言したらだめ
const doSomething = function () {
    //何かする
}

// アロー関数 「function ()」 の代わりに 「() =>」これ使う
const doSomething = (base, height) => {
    const area = (base * height) /2;
    return area;
}

const getCircleArea = (r) => {
    return r * r * Math.PI;
}
// 引数が一個の場合は（）省略できる。引数ない場合は省略できない。
const getCircleArea = r => {
    return r * r * Math.PI;
}
// ここまで省略できる
const getCircleArea = r =>  r * r * Math.PI;