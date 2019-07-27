/* Task 1 */

function largerNumbersOfArray(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    if (newArr.length > 0) {
        return newArr;
    }
    return 'Such values do not exist.';
}

let array = [10, 25, 16, -5, 30, 15, 24];
let number = 16;
console.log(largerNumbersOfArray(array, number));

/* Task 2 */

function evenDigitsNumbersBetweenTheGiven(start, end) {
    let str = '';
    let result = '';
    for (let i = start; i <= end; i++) {
        let lastDigit = i % 10;
        let firstDigit = Math.floor(i / 10);
        if (lastDigit % 2 !== 0 && firstDigit % 2 !== 0) {
            result = 'Such numbers does not exist.';
        } else {
            str += i + ', ';
            result = str;
        }
    }
    return result;
}
console.log(evenDigitsNumbersBetweenTheGiven(19, 42));

/* Task 5 */

function violatedAscendingOrder(arr) {
    debugger;
    let result;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    return result;
}

let array = [-9, -4, -4, 3, 12, 4, 5];
console.log(violatedAscendingOrder(array));
