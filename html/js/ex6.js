const min = 1;
const max = 100;
function randomWithRange(min,max){
   let range = (max-min) + 1;
   return (Math.random()*range) + min;
}
console.log(randomWithRange(min,max));
var guess = Number(prompt("Enter guess number"));
