/**
 * Map adalah built-object di Javascript
 * yang bisa kita gunakan untuk menyimpan data dalam bentuk
 * array [key, value]
 */

 let data = [
    ['nama', 'budi'], // key nya nama', valuenya 'budi'
    ['umur', 30]
 ];

 let mymap = new Map(data); // Map { 'nama' => 'budi', 'umur' => 30 }

 // cara mengakses
 let nama = mymap.get('nama');
 let umur = mymap.get('umur');

 console.log(nama); // budi
 console.log(umur); // 30

  
 // set value baru ke Map

 mymap.set('alamat', 'Jl. Makmur');

 console.log(mymap); //Map { 'nama' => 'budi', 'umur' => 30, 'alamat' => 'Jl. Makmur' }

 let alamat = mymap.get('alamat');

 console.log(alamat); // Jl. Makmur

// akses via loop
for (let [key, val] of mymap) {
    console.log(key + ': ' + val);
}

// print item Map nya
for (let item of mymap) {
    console.log(item);
}

// ambil key nya saja
for (let key of mymap.keys()) {
    console.log(key); 
}

// ambil value nya saja
for (let val of mymap.values()) {
    console.log(val);
}

// bisa juga pakai forEach. Map() punya prototype method forEach
mymap.forEach(function(key, val) {
    console.log(key + ': ' + val);
});

// check exist dengan Map.prototype.has(<key>)

if (mymap.has('nama')) { 
    // true
}