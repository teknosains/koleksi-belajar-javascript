/**
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