// Q1. create a function that search for an element in an array and returns the index,if the element is not present then just return -1(not found)

function searchElement(arr10, ele) {
    for (let i = 0; i < arr10.length; i++){
        if (arr10[i] == ele) {
            return i;
        }
    }
    return -1;
}
let arr10 = [4, 2, 0, 10, 8, 30];
let result = searchElement(arr10, 10);
console.log(result);

//or 

function searchEle(arr11, ele) {
    for (let i = 0; i < arr11.length; i++){
        if (arr11[i] == ele) {
            console.log("Element is present : "+i );
            return;// optional here, just stops further looping
        }

    }
    console.log("Element is not present");
}
let arr11 = [4, 2, 0, 10, 8, 30];
searchEle(arr11, 50);


Q2.Create function that returns the number of negtive numbers in an array

function countNegatives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count ++ ;
        }
    }
    return count;
}
let arr = [2, -9, 17, 0, 1, -10, -4, 8];
console.log("count: ", countNegatives(arr));

// //write an function returns largest number in an array

function findLargest(arr1) {
    let largest = -Infinity;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] > largest) {
            largest = arr1[i];
        }
    }
    return largest;
}
let arr1 = [5, 0, 7, 10, 8, 17, 1];
console.log("Largest Number: ", findLargest(arr1));

function findLargest(arr2) {
    let largest=arr2[0];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > largest) {
            largest = arr2[i]; //updates largest number
        }
    }
    return largest;
}
let arr2 = [5, 0, 7, 10, 8, 17, 1];
console.log("Largest Number: ", findLargest(arr2));

 write an function returns smallest number in an array

function findsmallest(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let arr = [5, 0, 7, 10, 8, 17, 1];
console.log("Smallest element: ", findsmallest(arr));


function findsmallest(arr1) {
    let smallest = Infinity;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] < smallest) {
            smallest = arr1[i];
        }
    }
    return smallest;
}
let arr1 = [5, 0, 7, 10, 8, 17, 1];
console.log("Smallest element: ", findsmallest(arr1));
