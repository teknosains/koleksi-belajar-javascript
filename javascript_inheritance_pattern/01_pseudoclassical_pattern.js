/**
 * Meski sekarang bikin Class sudah bisa pake Syntatic Sugar di ES6
 * 
 * tetap saja kita wajib faham bagaimana Inheritance di Javascript bisa dilakukan
 * dengan cara fundamental/lama
 */

 /**
  * Pseudoclassical pattern
  *
  * pattern ini sebenarnya meniru gaya Classic seperti bhs pemrograman lain
  * di Javascript pattern ini dibuat dengan me-assign parent prototype ke child protoype
  *
  * child prototype = parent prototype
  */

  var Human = function() {} // base Class

  Human.prototype = {
    name: '',
    race: '',
    planet: 'Earth',
    sayRace: function() {
      console.log('My Name is ' + this.name + '. I am ' + this.race)
    },
    sayPlanet: function() {
      console.log('My Planet is ' + this.planet);
    }
  }
  
  var Asian = function(name) {
    this.name = name;
  }
  
  // inherit dari Human
  Asian.prototype = Human.prototype;
  
  
  var American = function(name) {
    this.name = name;
  }
  
  American.prototype = Human.prototype;
  
  
  // create object
  
  
  var budi = new Asian('Budi');
  
  budi.race = "Asian"; 
  budi.sayRace(); // "My Name is Budi. I am Asian"
  budi.sayPlanet(); // "My Planet is Earth"
  
  
  var mike = new American('Mike');
  mike.race = 'American'; 
  mike.sayRace(); // "My Name is Mike. I am American"
  mike.sayPlanet(); // "My Planet is Earth"
  
  /**
   * Kekurangan pattern ini
   * 
   * misal kita ingin set semua Asian dan turunanya adalah dari Mars
   */

  Asian.prototype.planet = "Mars";
  
  budi.sayPlanet(); // "My Planet is Mars"

  // mestinya planet si mike tetap Earth

  mike.sayPlanet(); // "My Planet is Mars"

  // kok si Mike ikut berubah? kan si mike American..? itu karena Passing By Reference
  // lihat Asian.prototype = Human.prototype; adalah hanya berupa passing by reference
  // karena Object di di javascript itu di passing by reference
  // lihat bahwa kelemahan pattern ini adalah saat kita ubah seperti diatas,
  // ia akan mengubah prototype dari Human sehingga
  // Object lain yang jadi turunan si Human ikut kena imbasnya
  
  let user = {
    name: "Agus"
  };

  let b = user; // ini di passing by reference
  let c = user;

  b.name; // Agus
  c.name; // Agus

  // kalo kita ubah begini
  b.name = "Budi";

  b.name; // Budi
  c.name; // Budi <--- ikut berubah karena object itu di passing by reference


  // karena kelemahan ini, pattern ini jarang dipakai...tapi kita perlu tahu
  
  
  