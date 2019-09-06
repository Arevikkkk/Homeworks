// 1. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.

let digits = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let hundreds = ['hundred','thousand'];

function numberToWords(num) {
    if (num < 20) {
        return digits[num];

    } else if (num >= 20 && num < 100) {
        return tens[Math.floor(num/10 - 2)] + (num%10 !== 0 ? ' ' + digits[num%10] : '');

    } else if (num >= 100 && num < 1000) {
        return digits[Math.floor(num/100)] + ' ' + hundreds[0] + (num%100 !== 0 ? ' ' + numberToWords(num%100) : '');

    } else if (num >= 1000 && num < 1000000) {
        return digits[Math.floor(num/1000)] + ' ' +  hundreds[1] + (num%1000 !== 0 ? ' ' + numberToWords(num%1000) : '');
    }
}

console.log(numberToWords(+prompt())); // minchev 10000-na ashxatum, kisata der




// 3. Given a word and a list of possible anagrams, select the correct sublist.

function anagrams(str, arr) {
    let result = '';
    let resArr = [];
    for (let value of arr) {
        if (str.length !== value.length) {
            continue;
        }
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < str.length; j++) {
                if (value[i] === str[j]) {
                    result += value[i];
                }
            }
        }
        if (result.length === str.length) {
            resArr.push(result);
            result = '';
        } else {
            result = '';
        }
    }
    return resArr;
}

let word = 'pencil';
let list = ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'];
console.log(anagrams(word, list));


// 4. Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. If there is not any negative number, ignore that array. Check that items of the given array are arrays.

const biggestNegativeNumber = arr => {
    let newArr = [];
    let result = 1;
    for (let item of arr) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                if (item[i] < 0) {
                    newArr.push(item[i]);
                } else {
                    continue;
                }
            }
            if (newArr.length) {
                result *= Math.max(...newArr);
                newArr = [];
            }
        } else {
            return 'Invalid Argument';
        }
    }
    if (result === 1) {
        return 'No negatives';
    }
    return result;
}

let array = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]];
console.log(biggestNegativeNumber(array));


