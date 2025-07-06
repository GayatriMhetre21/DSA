// Q. given an integer array nums and an integer val,remove all occurance val in nums in-place the order of elements maybe changed then return the number of elements in nums which are not equal to val

//remove Element 
function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != val) {
            arr[x] = arr[i];
            x++;
        }
    }
    return x;
}
let arr = [3, 1, 3, 4, 3, 3, 3, 7,2,4,2,5,2,6];
console.log(arr.slice(0, removeElement(arr, 2)));//return elements array

function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++){ 
        if (arr[i] != val) { //shift ele to left if it is not equal to val.
            arr[x] = arr[i];  //shift to x position
            x++;        //x shift to next index.
        }
    }
    return x;     
}
let arr = [3, 1, 3, 4, 3, 3, 3, 7, 2, 4, 2, 5, 2, 6];
console.log(removeElement(arr, 2));//return count after remove val from array
