//given a non-empty array of integers nums,every element apprears twice except for one .find single one

function singleNumber(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        }
        else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
}
let nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 6];
console.log("single number: ", singleNumber(nums));

//function singleNumber(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}
let nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 6];
console.log("single number: ", singleNumber(nums));
