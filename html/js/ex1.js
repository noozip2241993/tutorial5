const number1 = Number(prompt("Enter first integer: "));
const number2 = Number(prompt("Enter second integer: "));
const operation = prompt("Enter mathematical Operation '+,-,*,/");

switch(operation){
    case "+":
    console.log(`${number1} + ${number2} = ${number1 +number2} `);
    break;
    case "-":
    console.log(`${number1} - ${number2} = ${number1 -number2} `);
    break;
    case "*":
    console.log(`${number1} * ${number2} = ${number1 *number2} `);
    break;
    case "/":
    console.log(`${number1} / ${number2} = ${number1 /number2} `);
    break;
    case "%":
    console.log(`${number1} % ${number2} = ${number1 %number2} `);
    break;
    default:
    console.log("Not valid operation");
    break;

}
