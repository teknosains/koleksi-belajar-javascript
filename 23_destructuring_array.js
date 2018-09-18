/**
 * Sejak Javascript versi 2015 (ES6),
 * Array bisa kita de-structure biar membuat assignmen ke variable
 * lebih mudah
 */

let user = ["Budi", "Agus"];

let budi = user[0];
let agus = user[1];

// bisa kita buat lebih simple

let [budi, agus] = user;

console.log(budi);
console.log(agus);

// descturcture array dengan rest operator

const source = [1,2,3,4,5,6,7,8,9,10];
const [a, b, ...c];

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3,4,5,6,7,8,9,10]
