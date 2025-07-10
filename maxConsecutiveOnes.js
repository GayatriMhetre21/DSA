//given a binary array return the max number of consecutive 1's in the array.
function maxConsecutiveOnes(nums) {
    let currentcount = 0;
    let maxcount = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 1) {
            currentcount++;
        }
        else {
            maxcount = Math.max(currentcount, maxcount);
            currentcount = 0;
        }
    }
    return Math.max(currentcount, maxcount);
}
let nums = [1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1];
console.log(maxConsecutiveOnes(nums));
