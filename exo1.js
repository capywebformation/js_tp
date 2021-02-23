const scanf = require("scanf");

console.log("a:");
var a = scanf("%s");

console.log("b:");
var b =  scanf("%s");

if(b.length * 2 === a.length){
  console.log("a est deux fois supérieur à b");
}
else {
  console.log("a n'est pas deux fois supérieux à b");
}

