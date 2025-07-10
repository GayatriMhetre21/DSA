// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. note:- that you must do this in-place without making copy of array.

function moveZeros(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != 0) {
            nums[x] = nums[i];
            x++;
        }
    }
    for (let i = x; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}
let nums = [0, 1, 0, 3, 13];
console.log(moveZeros(nums));
