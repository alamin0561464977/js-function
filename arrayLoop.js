const numbers = [30, 59, 39, 28, 74, 21];
let num1 = [];
let num2 = [];
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i] % 2;
    // console.log(numbers[i], num);
    if (num === 0) {
        console.log(numbers[i], "num +");
        num2.push(numbers[i]);
    }
    else {
        console.log(numbers[i], "num -")
        num1.push(numbers[i])
    }
};
console.log(num1, "num-")
console.log(num2, "num+")
