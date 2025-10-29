const animals = ['cat','dog','bird'];
// const animals = [true,'dog',0]; 違う型のものも入れれるJavaScript
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

animals[0] = 'human'; // catをhumanに変える
// const宣言でもオブジェクト型の中身は書き換えできる

animals.push('monkey'); //最後に追加
animals.unshift('gorilla'); //最初に追加
animals.splice(0,1); // 削除

console.log(animals.length);　// 何個入ってるか
console.log(animals);

const newAnimals = animals.slice(0, 1);　// 元の型を使って新しい型を作る時
console.log(newAnimals);

// 多次元配列
const numbers = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8, 9]
]
console.log(numbers[1][2]); // 結果: 5