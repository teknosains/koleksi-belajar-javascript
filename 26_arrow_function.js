/**
 * pada Javscript terbaru, sudah support pembuatan function dengan arrow
 * 
 * tapi arrow function hanya bisa untuk expression atau callback
 */
function test() {
    //
}

// function diatas (declaration function) gk bisa dibuatkan versi arrow nya

// function expression
let test2 = function() {
    console.log('haloo');
};

test2(); // haloo

// function expression bisa kita buatkan versi Arrow nya
let test3 = () => {
    console.log('haloo');
};

test3(); // haloo

// pakai parameter

let test4 = (x, y) => {
    return x * y;
};

// bisa juga tanpa kurawal, jika hanya satu statement
test4 = (x, y) => x * y;

// function diats sama dengan
function test4(x, y) {
    return x * y;
}

// arrow function juga enak dipake buat callback
setTimeout(() => {
    console.log('haloo');
}, 1000);

// contoh lagi
const student = ['Budi', 'Agus'];
student.forEach((item, index) => { // dengan kurawal
    console.log(item);
});

let num = [1, 3];
let sum = num.map((item) => item * 2); // tanpa kurawal
console.log(sum); //[2, 6]

let sum2 = num.map((item) => { // pake kurawal karena body nya ada lebih dari 1 statement
    console.log(item); // statement 1
    return item * 2; // statement 2
});
console.log(sum2); //[2, 6]

/**
 * Arrow function tidak punya "this" sendiri.  Saat di panggil, maka ia akan mencari this
 * sampai ke Enclosing scope/lexical scope nya. Jika ketemu, maka
 * this dari Lexial scope nya akan di pake
 * -----------------------------------------------------
 */
let user = {
    name: "budi",
    sayName: function () {
      console.log(this); // this ini milik object user
    }
  };
  
user.sayName();

// bandingkan dengan arrow function

let user = {
    name: "budi",
    sayName: () => {
      console.log(this); // this ini milik global window object
    }
  };
  
  user.sayName();

/**
 * Arrow function tidak bisa di panggil dengan "new"
 * -----------------------------------------------------
 */
const User = (name) => { 
    this.name = name;
}

new User('Budi'); // TypeError: User is not a constructor

/**
 * Arrow function berguna untuk binding this context kedalam Callback
 */
const user = {
    name: "Budi",
    score: [20, 30, 40],
    factor: 2,
    printScore: function() {
      let res = this.score.map((item) => {
        return item * this.factor; // this ini diambil dari Lexical Scope/Enclosing Scope si Arrow function
        // ketemu dah..ternyata this nya milik si object user
        // ia bakal otomatis nyari si this nya...kalo function biasa mesti kita pake-in bind()
      });
      
      return res;
    }
  };
  
  
  let c = user.printScore();
  console.log(c); // [40, 60, 80]

  // tanpa Arrow function kode diatas mesti begini


const user = {
    name: "Budi",
    score: [20, 30, 40],
    factor: 2,
    printScore: function() {
      let res = this.score.map(function(item) {
        return item * this.factor;
      }.bind(this));
      
      return res;
    }
  };
  
  
  let c = user.printScore();
  console.log(c); // [40, 60, 80]

  // atau begini (yang lebih baik)


const user = {
    name: "Budi",
    score: [20, 30, 40],
    factor: 2,
    printScore: function() {
      let res = this.score.map(function(item) {
        return item * this.factor;
      }.bind({ factor: this.factor }));
      
      return res;
    }
  };
  
  
  let c = user.printScore();
  console.log(c); // [40, 60, 80]
