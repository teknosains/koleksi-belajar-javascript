 /**
   * Setter getter pada Class/Function Constructor
   */
  function Mahasiswa(name, ipk) {
    this.name = name;
    this.ipk = ipk;

    // bikin property baru pake cara gini
    Object.defineProperty(this, 'age', {
      get() {
        return 20;
      }
    });

    // buat setter getter untuk Name
    Object.defineProperty(this, 'newName', {
      get() {
        return this.name;
      },
      set(val) {
        this.name = val;
      }
    });
}

let budi = new Mahasiswa('Budi', 3.0);
budi.name; // Budi
budi.ipk; //3.0;
budi.age; // 20 ...//lihat sekarang bisa diakses

// set pake Setter
budi.newName = "Budi Krisna";
budi.name; // Budi Krisna

// get pake getter
budi.newName; // Budi Krisna

/**
 * Catatan: Nama setter dan getter tidka boleh sama dengan nama property
 * 
 * this.name <-- property, klo mau buat getter cari nama lain
 * seperti diatas kita kasih nama: newName
 */

/**
 * Setter getter pada Class ECMAScript 6 (versi javascript baru)
 */

 class Mahasiswa {
     constructor(name, ipk) {
        this._name = name;
        this._ipk = ipk;
     }

     get name() {
        console.log('Hi, ' + this._name);
     }
     set name(val) {
         console.log(val)
         this._name = val;
     }
 }

 let dedi = new Mahasiswa('Dedi', 3.0);
 dedi.name = "Dedi Pekok"; // ini akan manggil setter: set name()
 dedi.name; // ini akan memanggil getter: get name()

 /**
  * NOTES: Jika hendak menamain getter & setter nya sama seperti nama properties,
  * maka properties harus diubah namanya ..karena gk boleh sama dengan nama setter getter
  * itulah makanya pada class Mahasiswa diatas, properties nya: this._nama dan bkan this.nama
  * jika ditulis this.nama, maka Error
  *
  */

  /**
   * Kegunaan Getter lebih lanjut pada ES6
   */

   class Segiempat {
       constructor(panjang, lebar) {
           this.panjang = panjang;
           this.lebar = lebar;
       }

       get luas() {
           console.log(this.panjang * this.lebar);
       }
   }

   let persegi = new Segiempat(4, 4);
   persegi.luas; // 16

   let segipanjang = new Segiempat(6, 4);
   segipanjang.luas; // 24