/**
 * Javascript is about Object !
 * 
 * Apa itu prototype object? 
 * 
 * Jadi setiap kali kita buat Function(), Javascript sudah siapkan
 * object prototype didalamnya. 
 */

 function Person() {

 }

 /**
  * fungsi Person() klo kita cek di console, maka dia sudah nyediain object 
  * yang diberi nama prototype
  * 
  * Person.prototype = {}
  * 
  * coba aja cek dengan : console.log(Person)
  * 
  * prototype berguna untuk membuat properties dan juga inheritance
  */

  function Person() {
      this.name = "Budi"
      this.sayName = function() {
          return 'My name is ' + this.name;
      };
  }

  /**
   * Bisa juga kita buat begini
   */
  Person.prototype.name = "Budi";

  /**
   * Bisa juga untuk membuat method baru
   */
  Person.prototype.sayName = function() {
    return 'My name is ' + this.name;
  };

  Person.prototype.newMethod = function() {
      // 
  };

  Person.prototype.newMethodAgain = function() {
      //
  };