/**
 * Array.reduce berguna saat hendak melakukan operasi matematika
 * terhadap array seperti nge-SUM dll
 *
 *  Array.reduce(<function>, initValue)
 */
const numberSumer = function(arr) {
    /**
     * @param function, {Integer} InitialValue
     */
    return arr.reduce(function(a, b) {
        return a + b;   
    });
};

console.log(numberSumer([2,3])); // 5