// 1. Given a sorted array and an element from that array. Find the index of that element using binary search.

function binarySearch(arr, num) {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        if (num === arr[i]) {
            return i;
        }
    }
    for (let j = Math.floor(arr.length/2); j < arr.length; j++) {
        if (num === arr[j]) {
            return j;
        }
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = 8;
console.log(binarySearch(array, element));
