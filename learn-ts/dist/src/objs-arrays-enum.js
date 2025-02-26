"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // 튜플
// } = {
//   name: 'jaehwan',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
    Role["CREATE_ONLY"] = "CREATE";
})(Role || (Role = {}));
const person = {
    name: 'jaehwan',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin'); // 튜플에서는 예외적으로 push의 오류를 잡아내지 못한다.
// person.role = [0, 'admin', 'user']; // push 대신 배열에 할당할 때는 잡아낼 수 있다.
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
