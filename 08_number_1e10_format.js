/**
 * di Javascript sering kita lihat numeric value
 * seperti 1e7, 2e6 dll
 */

 let money = 1e6; // type number

 // ini sebenarnya singkatan dari 1 dan 0 (6 biji) = 1000000
 // secara matematika 1e6 = 1 x 1000000

 let duit = 1e2; //100 -> 1 x 100
 let angka= 3e4; // 30000 -> 3 x 10000
 
 let uang = 1.23e5; // ??? -> 1.23 x 100000 = 123000

 // bagaimana kalo pecahan 0.xxx ? 
 // maka notasinya adalah xe-y 

// 0.001 -> 1 / 1000 -> 1e-3
// 0.0001 -> 1 / 10000 -> 1e-4

// toSring() pada number
//
// jika number pake toString(), artinya di akan diconver ke basis 10 by default
// toString(16) , basis 16 (hexadecimal)
// toString(2), basis 2 (binary)
// toString(8), basis 8 (Oktal)

let num = 255;
num.toString(); // 255, default basis 10 (desimal)
num.toString(2); // biner 11111111
num.toString(8); // oktal 377
num.toString(16); // hexa fff

// kalao mau ubah langsung dari number, maka pakai .. (double dot)

123456..toString(36); 

// karena kalau 123456.toString(36) maka ia error karena dianggap single dot 
// adalah pecahan desimal

/**
 * Konversi Numeric ke Number
 */
let age = "40"; // string

console.log(+age); // jadinya number
console.log(parseInt(age)); // number, integer
console.log(parseFloat(age)); // number, float

/**
 * Operasi numeric
 */
let x = "10";
let y = "20";

// string + string
console.log(x + y); // 1020  <--- karena dianggap sebagai konkatenasi

let a = "10";
let b = 20;

// string + number
console.log(a + b); // 1020 <--- masih dianggap sebagai konkatenasi selama opeator nya +

// string / number
console.log(a / b); // 0.5 <-- selain operator + maka otomatis dikonversi ke Number

// string * number
console.log(a * b); // 200 <-- selain operator + maka otomatis dikonversi ke Number