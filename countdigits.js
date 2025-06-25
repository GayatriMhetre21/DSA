//write a function that returns the count of digits in number

function countDigits(n) {
    if (n == 0) {
        return 1;
    }
    n = Math.abs(n);        //remove negatives
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);         //remove decimals
        count++;

    }
    return count;
}
let n = 0;
console.log("digits are: ", countDigits(n));
