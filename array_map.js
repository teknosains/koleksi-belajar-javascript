/**
 * Array.map digunakan utk memodifikasi Array
 *  
 */
const arrayModifier = function(arr) {
    const sign = 'Mr.';
    return arr.map(function(item) {
        return sign + item;
    });
};

let x = ['budi', 'agus'];

console.log(arrayModifier(x));

// array map tidak memofidikasi array asal, tapi ia me-return/membuat array baru

let num = [2, 3];
let hasil = num.map(function(item) {
    return item * 2;
});

console.log(hasil); // [4, 6]
console.log(num); // [2, 3]
