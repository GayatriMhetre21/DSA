//write a function to check palindrome or not
function checkPalindrome(n) {
    if (n < 0) {
        return false;
    }
    let copy=n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    if (rev == copy) {
        return true;
    }
    else {
        return false;
    }
}
let n = 1221;
console.log(checkPalindrome(n));

//or

function checkPalindrome(n) {
    if (n < 0) return false;
    let copy = n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    if (rev == copy) return true;
    else return false;
}
let n = 123221;
console.log(checkPalindrome(n));

//or

function checkPalindrome(n) {
    if (n < 0) {
        return false;
    }
    let copy = n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    return rev == copy;                 //instead of if else
}
let n = 12243561;
console.log(checkPalindrome(n));

