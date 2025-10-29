// オブジェクト

//myProfileという関数はsayHelloというメソッドを持つ
const myProfile = {
    lastName: '右寺',
    firstName: '隆信',
    birthyear: '1982',
    hometown: '佐賀',
    sayHello() {
        console.log( 'Hello' );
    },
    greet() {　// オブジェクトの中で、this使うとその中を参照できる（メソッド内で）
        console.log(
            `私の名前は${this.lastName}${this.firstName}です。${this.birthyear}年生まれで、${this.hometown}出身です。`
        );
    },
};
myProfile.greet();

// thisの使い方
// 関数の中でthis使うと、console.log(window)が出る
function func() {
    console.log(this);
}
func();

//
const obj = {
    str: 'abc',
    func1() {
        console.log(this.str); //メソッド呼び出し

        // const func2 = function () {
        //     console.log(this.str); //関数呼び出し
        // };
        const func2 = () => { // アロー関数使うと'abc'と表示される。
            console.log(this.str);
        };
        func2();
    }
};
obj.func1();