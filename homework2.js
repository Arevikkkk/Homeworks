/* Task3 */

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }
    if (sum >= 0 && sum < 10) {
        return sum;
    }
    return sumOfDigits(sum);
}

let number = prompt('Enter a number', 14);
console.log(sumOfDigits(number));
