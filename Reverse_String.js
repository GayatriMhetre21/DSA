//Q.write function that reverse a string the input string is given as an array of characters.you musr do this by modifying that in-place array in-place with 0(1) extra memory.

function reverseString(arr) {
    let n = arr.length;
    let half = Math.floor(n / 2);
    for (let i = 0; i < half; i++){
        //swapping s[i],s[n-1-i]
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    return arr;
}
let arr = ["h", "e", "l", "l", "o"];
console.log(reverseString(arr));
