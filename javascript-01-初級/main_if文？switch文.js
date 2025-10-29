const getCry = animal => {
    switch (animal) {
        case 'cat':
            // return 'にゃー';
            console.log('にゃー');
            break; // !必要!
        case 'dog':
            // return 'わんわん';
            console.log('わんわん');
            break;
        case 'bird':
            // return 'ちゅんちゅん';
            console.log('ちゅんちゅん');
            break;
        case 'lion':
            // return 'がおー';
            console.log('がおー');
            break;
        case 'elephant':
            // return 'ぱおーん';
            console.log('ぱおーん');
            break;
        default:
            // return '（　＾ω＾）・・・…';
            console.log('（　＾ω＾）・・・…');
            break;
    }
};
console.log(getCry('elephant'));
//matchしたものから下すべて実行されるので、return 以外は break を記述する必要がある！