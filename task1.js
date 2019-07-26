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
