const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference: 2*Math.PI*r,
    area: Math.PI*r*r
};

console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);