const scanf = require("scanf");

console.log("entier:");
var a = scanf("%d");
var total = 0;

for(let i=1; i<=a; i++){
 total += i ; // total = total + i
}

console.log(total);
