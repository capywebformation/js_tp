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
var somme = tab.reduce((a,b) => a+b);
var avg = somme/5;

console.log("avg", avg);

var maxValue = Math.max(...tab); // Opérateur de décomposition
//var a = [1,2]
//var b = [3,4]
//[...a, ...b] = [1,2,3,4]
var indice = tab.indexOf(maxValue);

console.log("indice", indice);
