//add new class with tablue values
  
  class perssones {
    constructor(prenom, nom, age, adresse) {
        this.prenom = "Moin"
        this.nom = "Aljedaili";
        this.age = 37;
        this.adresse = "Bordeaux";
       
    }
  }
  
  const tony = new perssones();
  
  console.log(tony);


  class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  console.log(new Polygon(4, 3).area);
  // expected output: 12
