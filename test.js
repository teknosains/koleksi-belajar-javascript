function Human() {
    this.name = null;
    this.age = null;

    this.race2 = function() {
        return 'asian';
    }
}

Human.prototype.race = function() {
    return 'asian';
};

var budi = new Human();

console.log(budi.hasOwnProperty('name'));
console.log(budi.hasOwnProperty('age'));
console.log(budi.hasOwnProperty('race'));
console.log(budi.hasOwnProperty('race2'));