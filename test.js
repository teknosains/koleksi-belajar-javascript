let mhs = {
    name: "Budi",
    age: 20,
    matkul: ["C2", "C3", "C4"],
    showMatkul() {
      //console.log(this);
      this.matkul.forEach(function(item, index) {
        console.dir(this.name + item);
      });
    }
  };
  
  mhs.showMatkul();