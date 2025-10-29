// const showLog = () => {
//     const a = 1;
//     console.log(a);
// }

// showLog();
// console.log(a);


//子（関数の中）から、親（スコープ）を参照できる
const a = 'グローバルスコープのa';

const func1 = () => {
    const a = 'func1関数のa';
    console.log(a);

    const func2 = () => {
        const a = 'func2関数のa';
        console.log(a);
    };
    func2();
};

console.log(a);
func1();
