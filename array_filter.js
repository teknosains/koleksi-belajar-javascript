/**
 * Array.filter digunakan untuk memfilter array sesuai
 * kriteria yang diinginkan
 * 
 */
const GanjilFilter = function(arr) {
    // @return new array
    return arr.filter(function(item, index) {
        // @return boolean true|false
        return item % 2 === 1;
    });
};

const arr = [1,2,3,4];
const ganjil = GanjilFilter(arr);


console.log(ganjil); // output: [1, 3]
console.log(arr); // output: [1, 2, 3, 4]

// array filter tidak memodifikasi array asalnya, tapi dia me-return/membuat array baru