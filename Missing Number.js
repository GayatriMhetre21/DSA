//Q.Given an array nums containing n distinct numbers in the range [0,n],return the only number in the range that is missing from the array

function missingNumber(nums) {
    let n = nums.length;
    let sum = 0;
    let totalsum = n * (n + 1) / 2;
    for (let i = 0; i < n; i++){
        sum = sum + nums[i];
    }
    return totalsum - sum;
}
let nums = [0, 1, 2, 3, 5, 6];
console.log("missing number: ", missingNumber(nums));
