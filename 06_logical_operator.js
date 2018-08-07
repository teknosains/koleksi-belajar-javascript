/**
 * ini mah seperti biasa lah...
 * digunain buat nentuin suatu kondisi sesuai keinginan atau gak
 */

 // di Javascript ada operand || (OR) yang lebih spesial dari
 // bahasa lain. sekarang || sering digunakan dalam expression atau variable assignment

 let username = null;
 let name = "default";

 let loginName = username || name; // default
 
 // statement diatas dibaca: "kalau gk username ya name"
 // artinya kalau username nya falsy, pilih name
 // kalau username truthy ya pilih username

 console.log(loginName);

 // penulisan diatas username || name lebih pendek dari pada begini
 if (username) {
    loginName = username;
 } else {
    loginName = name;
 }

 // bahkan lebih enak dilihat dari ternary opeator dibawah
 loginName = (username) ? username : name;

 // list value boolean compare ||

 console.log( true || true );   // true
 console.log( false || true );  // true
 console.log( true || false );  // true
 console.log( false || false ); // false
 console.log( 1 || 0 ) ; // 1
 console.log( 0 || 0 ); // 0;

 // dengan ||,  semuanya true kecuali jika false VS false

// AND operand
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
console.log( 1 && 0 ) ; // 0
console.log( 0 && 0 ); // 0;
console.log( 1 && null ) ; // null
console.log( 1 && undefined ) ; // undefined

// kalau && (AND), semua bernilai false kecuali jika ada true VS true
// 