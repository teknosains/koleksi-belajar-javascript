/**
 * Array.reduce berguna saat hendak melakukan operasi dimana hanya ada 1 return value
 * yang ingin dihasilkan seperti nge-SUM, nge-Average dll. 
 * BUkan hanya itu..Array.reduce juga banyak bgt fungsinya
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

// membuat Tally Object...menghitung jumlah item yang sama dalam Array
   let user = [
    'budi', 'agus', 'budi', 'dedi', 'agus', 'budi', 'jenis'
   ];
   
   let penampung = {};
   let a = user.reduce((obj, item, index) => {
     let counter = (obj[item] || 0) + 1;
     console.log('iterasi#' +(index+1) + ': obj[' + item +'] -> ' + obj[item] + ' -> ' + (counter-1) + '+1 -> '+ counter)
     
     obj[item] = counter;
     return obj;
   }, penampung);
   
   console.log(a)
   
   // outputnya 
   /*

    "iterasi#1: obj[budi] -> undefined -> 0+1 -> 1"
    "iterasi#2: obj[agus] -> undefined -> 0+1 -> 1"
    "iterasi#3: obj[budi] -> 1 -> 1+1 -> 2"
    "iterasi#4: obj[dedi] -> undefined -> 0+1 -> 1"
    "iterasi#5: obj[agus] -> 1 -> 1+1 -> 2"
    "iterasi#6: obj[budi] -> 2 -> 2+1 -> 3"
    "iterasi#7: obj[jenis] -> undefined -> 0+1 -> 1"

    {
        agus: 2,
        budi: 3,
        dedi: 1,
        jenis: 1
    }
   
   */

   /**
    * Cara kerja: 
    * IF obj[<keys>] belum exist alias undefined
    *    THEN counter = 0 + 1
    *       ELSE counter = counter + 1
    */