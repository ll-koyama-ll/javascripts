const myProfile = {
    lastName: '右寺',
    firstName: '隆信',
    birthyear: '1982',
    hometown: '佐賀'
};

console.log(myProfile.lastName); // 結果: 右寺
console.log(myProfile['lastName']); // 結果: 右寺

myProfile.hometown = 'つくば';

myProfile.sex = '男性';
console.log(myProfile.sex);

console.log(myProfile);

//削除
delete myProfile.hometown;
console.log(myProfile);

//この値を持っているかどうか（True/False）
console.log(myProfile.hasOwnProperty('lastName'));