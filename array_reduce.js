/**
 * Array.reduce berguna saat hendak melakukan operasi matematika
 * terhadap array seperti nge-SUM dll
 *
 */
const numberSumer = function(arr) {
    /**
     * @param function, {Integer} InitialValue
     */
    return arr.reduce(function(a, b) {
        return a + b;   
    }, 0);
};

console.log(numberSumer([2,3]));