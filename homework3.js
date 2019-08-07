/* Task1 */

function biggestNegativeNumberOfArray(arr) {
    let result;
    for (let value of arr) {
        if (!Array.isArray(value)) {
            return 'Invalid Argument';
        }
    }
    result = productOfNegatives(arr);
    return result;
}

function productOfNegatives(arr) {
    let res;
    let product = 1;
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < 0 && arr[i][j + 1] !== 0) {
                if (arr[i][j] > arr[i][j + 1]) {
                    res = arr[i][j];
                } else {
                    res = arr[i][j + 1];
                }
                product *= res;
                result = product;
            } else if (arr[i][j] >= 0 && product === 1) {
                result = 'No negatives'; 
            }
        }
    }
    return result;
}

let array = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]];
console.log(biggestNegativeNumberOfArray(array));


/* Task2 */

function countOfNumbersAndStrings(arr) {
    let countNum = 0;
    let countStr = 0;
    for (let value of arr) {
        if (typeof value === 'number') {
            countNum++;
        } else if (typeof value === 'string') {
            countStr++;
        }
    }
    return `Numbers: ${countNum}, Strings: ${countStr}`;
}

let array = [1, '10', 'hi', 2, 3];
console.log(countOfNumbersAndStrings(array));

