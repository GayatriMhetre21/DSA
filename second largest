//find second largest number
function secondlargest(arr7) {
    if (arr7.length < 2) {
        return "array should have atleast 2 elements..";
    }
    let firstlargest = -Infinity;
    let secondlargest = -Infinity;
    for (let i = 0; i < arr7.length; i++){
        if (arr7[i] > firstlargest) {
            secondlargest = firstlargest;
            firstlargest = arr7[i];
        }
        else if (arr7[i] > secondlargest && arr7[i] != firstlargest) {
            secondlargest = arr7[i];
        }
    }
    return secondlargest;
}
//let arr7 = [10, 20, 8, 20, 9, 3, 5, 20, 20];
let arr7 = [10];
console.log("second largest: ", secondlargest(arr7));
