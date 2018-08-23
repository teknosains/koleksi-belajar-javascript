/**
 * Object adalah sebuah Data Type di javascript
 * ia bisa juga seperti primitif jika kita assign langsung sebagai literal
 */
let user = {};

/**
 * Karena tipenya Object maka user prototype akan mewarisi Object protype
 * 
 * silahkan cek di console
 * console.dir(user)
 * console.dir(user.__proto__) 
 * console.log(user.__proto__ == Object.prototype) // true
 */

console.log(user.__proto__ == Object.prototype) // true

// check property dari Object exist 

let player = {
    name: "Agus",
    age: 30
};

// pake in
if ("name" in player) {
    console.log(true);
}

if ("age" in player) {
    console.log(true);
}

// bisa juga pakai undefined
if (player.name !== undefined) {
    console.log(true);
}

// bisa juga pakai hasOwnProperty
if (player.hasOwnProperty('name')) {
    console.log(true);
}


// mengakses Object, pakai . (dot) atau []

player.name;
player['name'];

//bisa juga pakai loop
for (let key in player) {
    console.log(key); // the keys
    console.log(player[key]); // the values
}

// Object itu di Assign dan di copy by reference (passing by reference). Jadi saat kita bikin Object, value nya
// di kopy ke memory...dan variable nya punya reference/pinter ke alamat memory nya

let human = {
    name: "Agus"
};

let budi = human;

console.log(human.name); // agus
console.log(budi.name); // agus

budi.name = "Candra"; // atau bisa jg human.name = "Candra"

console.log(human.name); // Candra
console.log(budi.name); // Candra

/**
 * Terlihat bahwa saat kita ubah budi.name = "Candra" 
 * maka value nya akan terlihat (sama) oleh human.name juga
 */

 // beda hal nya dengan tipe data primitif dimana value di assign langsung (passing by value)
 let x = 3; // asign 3 ke x
 let y = x; // copy value dari x ke y...jadi skrg y = 3

 console.log(x); // 3
 console.log(y); // 3

 x = 4;

 console.log(x); // 4
 console.log(y); // 3

 /**
  * lihat bahwa y diakhir hasilnya tetap 3...karena yang di copy itu Value nya saja
  * jadi sebenarnya x, y adalah dua independen variable
  */


  // Cloning Object
  let obj1 = {
    a: 2,
    b: 4,
    c: 6
  };

  let obj2 = {
    d: 5,
    e: 7,
    f: 8
  };

  let obj3 = Object.assign({}, obj1, obj2);

   obj2.f = 10;
   console.log(obj2);
   console.log(obj3);

   let b = 200;
   console.log(typeof b);

   // Modify Object in Place
   
   let menu = {width: 200, height: 300, title: "My Menu"};

   function multi() {
    for (let key in menu) {
      if (typeof menu[key] == 'number') {
        menu[key] = menu[key] * 2;
      }
    }
  }

  menu.title = "My Menu updated";
  
  multi();
  console.log(menu); // { height: 600, title: "My Menu updated", width: 400 }


  // Computed property

  /**
   * Apasih computed property ? adalah ketika key/property dari Object
   * berasal dari sebuah variable lain
   */

   let name = "budi"

   let user = {
    [name + 'Age']: 5 
   };

   console.dir(user); // { budiAge: 5}
   console.log(user.budiAge); // 5

   // Menyingkat Object property 
   /**
    * Jika suatu nama object propertey/key sama dengan variable yang mau di assign, 
    * maka tidka perlu ditulis lagi
    */

    let x = 9;
    let y = 8;

    let xy = {
        x: x,
        y: y
    };

    // code diatas bisa kita persingkat

    let xy = {x, y};

    //contoh lain
    function makeUser(name, age) {
        return {
            name: name,
            age: age
        }
    }

    // bisa kita singkat jadi

    function makeUser(name, age) {
        return { name, age };
    }

    makeUser('Budi', 40); // { name: "budi", age: "40" }