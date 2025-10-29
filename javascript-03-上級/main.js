// クラス

// const gon = {
//     name: 'Gon Freecss',
//     type: 'Enhancer',
// };


class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`My name is ${this.name}, I'm ${this.type}.`);
    }
}

// const gon = new Character( 'Gon Freecss', 'Enhancer' );
const killua = new Character( 'Killua Zoldyck', 'Transmuter' );
const goreinu = new Character( 'Goreinu', 'Conjurer' );

// console.log(gon);
// console.log(gon.name);
// console.log(`${gon.name}はのタイプは、${gon.type}です。`);

// クラス継承
class myCharacter extends Character {
    constructor(name, type, atk, hp) {
        super(name, type);
        this.atk = atk;
        this.hp = hp;
    }
    getStatus() {
        return {
            atk: this.atk,
            hp: this.hp,
        };
    }
}

const gon = new myCharacter('Gon Freecss', 'Enhancer', 100, 20);
gon.introduce();
console.log(gon.getStatus());

