// 繰り返しの処理
// for文
let result = 0;
for (let i =1; i<=10; i++) {
    result +=i;
}
console.log(result);


// while文
let result2 = 0;
let i = 1;

while (i <= 10) {
    result2 += i;
    i++;
}
console.log(result2);

// for文
const animals = [ 'cat', 'dog', 'bird'];
// for (let i =0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// ↑と同じ forEach
animals.forEach(animal => {
    console.log(animal);
});


// 配列がいくつあっても、その数だけforeachする形がこれ
function sumNumbers(...args) {
    let results = 0;
    args.forEach(arg => {
        results += arg;
    });
    return results;
}
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// オブジェクト型の繰り返し
const animals2 = {
    cat: 'にゃー',
    dog: 'わんわん',
    bird: 'ちゅんちゅん',
    lion: 'がおー',
    elephant: 'ぱおーん'
}
for (const k in animals2) {
    console.log(`${k}は「${animals2[k]}」と鳴く`)
}

console.log(Object.keys(animals2));
console.log(Object.values(animals2));

//for in と結果は同じだけど、object.keysのほうがいい！
Object.keys(animals2).forEach(k => {
    console.log(`${k}は、「${animals2[k]}」と鳴きます`);
});