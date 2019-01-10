/**
 * Selain function hoisting, ada Juga variable hoisting
 */

 // ketika membuat variable dengan var , maka javascript engine
 // akan "menganggap" variable itu sudah dideklarasikan di bagian paling atas
 // suatu function
 function test() {
    if (true) {
        var nilai = "10";
        console.log(nilai);
    } else {
        console.log("0");
    }
 }

 // lihat kita coba buat variable var nilai = "10" di bawah, tepatnya didalam block if { }
 // javascript engine dibelakang, secara otomatis "menaikan" deklrasi variable itu di bagian paling atas
 // function test()

 // jadi kode diatas itu, oleh javascript engine dibelakang dibuat sama dengan berikut
 function test() {
    var nilai;
    if (true) {
        nilai = "10";
        console.log(nilai);
    } else {
        console.log("0");
    }
 }

 // perhatikan lagi
 function test() {
    if (false) {
        var nilai = "10";
        console.log(nilai);
    } else {
        console.log(nilai);
    }

    console.log(nilai);
 }

test(); // outout: undefined...ini adalah kondisi valid dan tidak error

// fungsi diatas akan error jika kita pakai let atau const, bukan var

function test() {
    if (false) {
        let nilai = "10"; // const nilai = "10"
        console.log(nilai);
    } else {
        console.log(nilai);
    }
  
    console.log(nilai);
 }

test(); // Error: nilai is not defined

// kenapa kalao pake let dan const error? meskipun sebenarnya let dan const sama-sama di Hoisted, tapi let dan const tidak 
// dapat di akses jika belum di deklarasi
 
