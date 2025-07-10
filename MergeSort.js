//Q.you are given 2 integer arrays nums1 and nums2 sorted in non-decreseing order, and 2 integers m&n ,respresenting number of elements in nums1 and nums2 respectively.
//merge nums1 and nums2 into a single array sorted in non-decreasing order.

function mergeSort(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++){
        if (p2 >= n || p1 <m && nums1Copy[p1] < nums2[p2]) {
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [4, 5, 6];
let n = 3;
console.log(mergeSort(nums1, m, nums2, n));


function mergeSort(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--){
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [4, 5, 6];
let n = 3;
console.log(mergeSort(nums1, m, nums2, n));
