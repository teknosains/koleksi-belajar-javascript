/**
 * di Javascript JSON adalah spesial Object yang dibuat khusus
 * untuk bermain dengan data ber-format json
 * 
 * object dapat dengan mudah kita ubah ke json
 */

 let user = {
    name: "Budi",
    age: 20
 };

 let res = JSON.stringify(user); // { "name": "Budi", "age": "20" }

 // dengan kata lain json adalah string version dari object

 /** saat membuat json dari object, ada beberapa yang di buang/skip
  * yaitu: fungction, symbols, dan property yang nilainya undefined  
  */

let human = {
    name: "Agus", 
    age: 20, 
    fungsi: function() {
        //
    },
    color: undefined
};

JSON.stringify(human); // {"name":"Agus","age":20}

// Array dalam object akan tetap disimpan sebagai array
let player = {
    name: "Budi",
    score: [1, 2, 3]
};

JSON.stringify(player); // {"name":"Budi","score":[1,2,3]}


// convert json ke Object?
// tinggal pake method JSON.parse(json_string)