'use strict'
/**
 * Try Catch...gunakan fitu ini kapan saja kita
 * gak yakin kalau suatu operasi itu bisa dipercaya atau gak.
 * atau saat kita prediksi "kayaknya ini bisa muncul error" 
 * 
 * Try catch juga membuat kita bisa menyembunyikan Error dari User.
 * jadi Error nya kita yang hanle sendiri.
 */

 /**
  * ada beberapa macam type Error dijavascript
  * yaitu :
  * 
    1. EvalError
    2. InternalError
    3. RangeError
    4. ReferenceError
    5. SyntaxError
    6. TypeError
    7. URIError

    semua jenis error diatas kita bisa handle dengan try..catch
  */

 // misal kita gk percaya sama library orang 
 try {
   let obj = new LibraryOrang();
 } catch (e) {
   console.log(e.message);
 }

 // contoh lain

 try {
   user = "Budi"; // lupa pake let atau var
   console.log(user);  // <-- ReferenceError: user is not define
 } catch (e) {
    // console.log(e); // Error object [Object ...] 
    console.log(e.message); // 
 }

 // kita bisa ganti Error message nya sendri
 const name = "Budis";
 try {
  if (name !== 'Budi') {
    throw new Error('Wajib Budi');
  }
} catch (e) {
   // console.log(e); // Error object [Object ...] 
   console.log(e.message); // Wajib Budi
}

// throwing Error ada 3 macam
let error1 = new Error(message); // pake klo hanya salah value dll
let error2 = new SyntaxError(message); // pake klo syntaxt nya salah
let error3 = new ReferenceError(message); // pake klo referencenya ngaco seperti property undefined dll

// try catch finally
// pakai lah finally saat kita memang butuh skrip lanjut mengeksekusi beberapa
// kode lain yang kita mau, block fynally selalu dieksekusi meskipun ada Error

try {
  balabla();
  console.log('Ini error'); // tidak akan di eksekusi, karena ada error
} catch (e) {
  console.log(e.message); // balabla is not defined
} finally {
  console.log('Final eksekusion'); // Final eksekusion
}

// finally tetap di eksekusi meskipun ada return atau throw di try block
function cek() {
  try {
    return 'hasil';
    // atau throw dibawah ini
    // throw new Error('New error message');
  } catch (e) {

  } finally {
    console.log('Final'); // tetap dieksekusi
  }
}

cek();

/**
 * Catch Object.
 * 
 * ada 3 object yang bisa kita cek dalam Catch
 * 
 * yaitu message, name, stack
 * 
 * 
 */
try {
  //
} catch (e) {
  e.message; // pesan error nya
  e.name; // jenis error
  e.stack; // lebih lengkap lagi
}