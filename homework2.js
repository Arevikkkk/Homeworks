/* Task1 */

function removeFirstElement(arr) {
    if (!arr.length) {
        return [];
    } else {
        arr[0] = removeFirstElement(arr[1]);
        return arr;
    }
}

let array = [6, 78, 'n', 0, 1];
console.log(removeFirstElement(array)); // arajin elementy chi jnjum, 0-a sarqum(

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
