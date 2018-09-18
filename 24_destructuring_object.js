/**
 * Object bisa di destcurcture untuk mempemudha assignment
 */

 let user  = {
     name: "Budi",
     age: 30,
 };

 //jadi selain begini
 let name = user.name;
 let age = user.age;

 //kita bisa juga akses property object seperti ini

 let {name, age} = user;
 
 console.log(name);
 console.log(age);