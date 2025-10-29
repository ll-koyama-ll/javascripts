// 比較演算子

// const getIsAdult = age => {
//     if(age >= 18) {
//         return '成人です';
//     } else {
//         return '未成年です';
//     }
// };

// console.log(getIsAdult(10));


// const checkBMI = (height, weight) => {
//     const bmi = weight / (height * height);
//     if (bmi >= 25) {
//         return '太りすぎ BMI:' +bmi;
//     } else if (bmi < 18.5) {
//         return '痩せすぎ BMI:' +bmi;
//     } else {
//         return '標準 BMI:' +bmi;
//     }
// };

// console.log(checkBMI(1.66, 58));


const a = 3;
const b = 5;

console.log(a >= b);
console.log(a > b);
console.log(a < b);
console.log(a <= b);

console.log(a === b); // 同じ時　==と意味が違う。必ず===これを使う。（数字と文字列を分ける）
console.log(a !== b); // 違う時　!=と違う。　!==これ使う。

// &&(and) ||(or)
const getIsSuccess = (math, english) => {
    if(math >= 80 && english >=80) {
        return '合格';
    } else {
        return '不合格';
    }
};

console.log(getIsSuccess(60, 90));


const bool1 = true;
console.log(!bool1); // bool1がtrueじゃない場合　結果:false

const bool2 = false;
console.log(!bool2); // bool2がfalseじゃない場合　結果:true


// 条件演算子（三項演算子）
const getIsEven = num => {
    if (num % 2 ===0) {
        return '偶数';
    } else {
        return '奇数';
    }
};
console.log(getIsEven(5));

// ↑と同じ意味　短縮
// const getIsEven2 = num => {
//     return num % 2 === 0 ? '偶数' : '奇数'
// };
// ↑と同じ意味　さらに短縮（一行なら、短縮可能）
const getIsEven2 = num => num % 2 === 0 ? '偶数' : '奇数'
console.log(getIsEven2(5));
