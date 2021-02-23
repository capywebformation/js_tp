const scanf = require("scanf");

var tab = [];
// var tab = new Array();

for(let i=1; i<=5; i++){
  console.log("entier " + i + " : ");
  let entier = scanf("%d");
  tab.push(entier);
}

// Tableau
console.log("tableau",tab);

// Indice du plus grand élement & Moyenne
var somme = 0;
var indice = 0;

for(let i=0; i<tab.length; i++){
  somme += tab[i];

  if(tab[i] > tab[indice]){
    indice = i;
  }
}

var avg = somme/5;

console.log("avg", avg);

console.log("indice", indice);
