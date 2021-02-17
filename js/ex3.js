const values = [3, 11, 7, 2, 9, 10];
var max = -999999999;
var min = 100000000;
var total = 0;
for (let i = 0; i<values.length; i++){
    total += values[i]
}
console.log(`Sum of all array values are ${total}`);


for (let j = 0; j <values.length; j++){
    if(values[j] < min){
        min = values[j];
    }
}
console.log(`Minimum value is ${min}`);

for (let k = 0; k <values.length; k++){
    if(values[k] > max){
        max = values[k];
    }
}
console.log(`Maximum value is ${max}`);