////Q.Given integer array nums sorted in non-decreasing order,remove the duplicates in-place such that each unique element apprears only once,the relatives order of the elements should be kept the same then return the number of unique elements in nums.
//remove duplicates
function removeDuplicates(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[x]) {
            x=x+1;
            arr[x] = arr[i];
        }
    }
    return x + 1;
}
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(arr.slice(0,removeDuplicates(arr)));
