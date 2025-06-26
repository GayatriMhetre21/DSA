// reverse integer
function reverseInteger(n) {
    let copy = n;
    let rev = 0;
    n = Math.abs(n)

    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    if (copy < 0) {
        return -rev;
    }
    else {
        return rev;
    }
}
let n = 12345;
console.log("Reverse Integer: ", reverseInteger(n));

// given a signed 32-bit integer x with its digit reversed if reversing causes the value to go outside the signed 32-bit integer range[-2^31,2^31-],then return 0.

function revsereInteger(x) {
    let copy = n;
    let rev = 0;
    n = Math.abs(n);

    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2, 31);
    // let limit = 2 ** 31;
    if (rev < -limit || rev > limit) {
        return 0;
    }
    //return (copy < 0) ? -rev : rev;
    if (copy < 0) {
        return -rev;
    }
    else {
        return rev;
    }
}

let n = -12345678;
console.log("Reverse: ", revsereInteger(n));
