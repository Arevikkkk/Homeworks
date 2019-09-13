// 1. Given a sorted array and an element from that array. Find the index of that element using binary search.

function binarySearch(arr, num) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (num === arr[middleIndex]) {
            return middleIndex;
        }
        if (num > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        if (num < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        }
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = 8;
console.log(binarySearch(array, element));
