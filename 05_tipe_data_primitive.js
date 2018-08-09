/**
 * Ada beberapa type data primitif di Javascript
 * 1. null
 * 2. undefined
 * 3. string
 * 4. number
 * 5. boolean
 * 6. symbol (baru ada di Ecmascript 2015)
 */

/**
 * yaap..Javascript punya tipe data primitif...
 * 
 * Tapi dibelakang layar, Javascript engine menyiapkan akses ke berbagai Methods/fitur
 * di built-inj Object sesuai dengan tipe nya
 */

 let name = "Agus";

 /**
  * DIatas adalah tipe data primitif string..tapi dibelakang layar, Javascript
  * menyediakan spesial object/copy dari variable 
  * yang punya akses ke semua fungsionalitas built-in String() karena tipenya string
  * 
  * oleh karena itu maka variable diatas akan punya akses ke fungsi/method seperti:
  */
  name.toUpperCase(); // AGUS
  name.toLowerCase(); // agus

  let age = 20;

  /**
   * variable age adalah primitif integer, dan integer adalah Number;
   * jadinya Javscript membuat spesial object/copy-an dari variable age 
   * dan terhadap spesial object tadi, lalu menyediakan fungsionalitas dari built-in Number()
   * makanya ia akan punya akses ke fungsi seperti
   */
  age.toFixed(2); // 20.00

  /**
   * untuk melihat apa saja method-method yang dibukain aksesnya, cek saja
   * lwat browser console 
   */
  console.dir(name.__proto__);
  console.dir(age.__proto__);

  /**
   * Kok proto? yaap sebenya mekanismenya sama kaya prototypal inheritance, tapi
   * khusus untuk tipe data primitif, spesial object/copy-an nya segera di destroy
   * 
   */

   // apasih spesial Object ? , itu mekanisme yang gk kelihatan
   // yang bertugas sebagai "temporary" object yang bisa mewarisi method/fungsi
   // dari Object diatas nya

   let nama = "Budi";

   /**
    * saat kita buat variable nama = "budi", javascript akan buatkan temporary object
    * dengan value "budi"
    *
    * katakanlah misalnya: [temporary] = "budi", dan ternyata tipe nya adalah string,
    * oleh karena itu si [temprorary] akan mewarisi semua fungsionalitas dari String()
    * atau dengan kata lain si [temprorary] itu mewarisi protototype property dari String()
    *  
    */

    var x = nama.toUpperCase(); // akan menghasilkan string baru
    console.log(x); // BUDI
    console.log(nama); // Budi

    //Nah kelihatan kan, kalo kita akses lagi console.log(nama); maka nama isinya tetap sama 
    // yaitu "Budi"



