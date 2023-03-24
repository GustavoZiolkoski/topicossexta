let num1 = Math.random() * 100;
let num2 = Math.random() * 100;
console.log(`O primeiro número é ${num1.toFixed(2)}`);
console.log(`O segundo número é ${num2.toFixed(2)}`);

if (num1 > num2) {
    console.log(`${num1.toFixed(2)} é o número maior ${num2.toFixed(2)} é o número menor.`);
} else {
    console.log(`${num2.toFixed(2)} é o número maior ${num1.toFixed(2)} é o número menor.`);
}