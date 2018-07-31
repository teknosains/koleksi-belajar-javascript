/**
 * Object bisa di destcurcture untuk mempemudha assignment
 */

 let user  = {
     name: "Budi",
     age: 30,
 };

 //jadi dari pada begini
 let name = user.name;
 let age = user.age;

 //mending begini

 let {name, age} = user;
 
 console.log(name);
 console.log(age);