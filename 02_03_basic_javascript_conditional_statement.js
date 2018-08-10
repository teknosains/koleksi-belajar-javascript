/**
 * Sama aja dengan bahasa pemrograman lain,
 * 
 * ada IF, SWITCH dan ternari dan Logical operator
 *
 * untuk Logical operator silahkan lihat file  06_logical_operator.js
 */

 // IF

 let age = 40;
 if (age > 40) {
   console.log('Tua');
 } else {
   console.log('Muda');
 }

 if (age == 40) {
   console.log('Usia Mapan');
 } else {
   console.log('Labil');
 }

 /**
  * 0, "" (string kosong), null, undefined, NaN di anggap FALSE dalam IF
  * selain itu maka dianggap TRUE termasuk "0" (string 0) itu adalah TRUE kalao di Javascript
  * 
  */
  
  let cek = 0;
  
  // let cek = null;
  // let cek = undefined;
  // let cek = NaN;
  // let cek = ""; 

  if (cek) { // semua dianggap false

  }

  // TERNARY  "?"

  let score = 50;

  let result = (score >= 50) ? 'Bagus' : 'Jelek';
  console.log(result); // 'Bagus
  
  // multiple ternary, ternari bisa juga lebih dari satu biji
  // ini menggantikan peran IF-ELSE

  let hasil = (score < 50) ? 'Jelek' : 
      (score < 60) ? 'Lumayan' : 
      (score < 70) ? 'Bagus' : 
      (score < 100) ? 'Sempurna' : 
      'Nilai diluar batas';

  console.log(hasil); // Jelek


  // SWITCH
  // Switch digunakan untuk mencocokan nilai SAMA DENGAN atau tidak

  switch(score) {
    case 50: // artinya: apakah score sama dengan 50
      console.log('Nilai kamu 50');
      break;
    case 60: // artinya: apakah score sama dengan 50
      console.log('Nilai Kamu 60');
      break;
    default:
      console.log('Nilai Kamu tidak diketahui');
      break;
  }

  // perlu diingat switch case harus pakai Break, jika tidak
  // maka javascript akan eksekusi case selanjutya
  switch(score) {
    case 50: // artinya: apakah score sama dengan 50
      console.log('Nilai kamu 50');
    case 60: // artinya: apakah score sama dengan 50
      console.log('Nilai Kamu 60');
    default:
      console.log('Nilai Kamu tidak diketahui');
      break;
  }

  // output diatas yang tanpa "break"

  // Nilai kamu 50
  // Nilai kamu 60
  // Nilai Kamu tidak diketahui

  // lihat semua case akan di cek dan di-output