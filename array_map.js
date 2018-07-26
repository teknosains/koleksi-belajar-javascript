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
