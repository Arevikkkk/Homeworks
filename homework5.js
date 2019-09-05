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

