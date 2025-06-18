
//loops
for (let i = 0; i < 20; i++){
   console.log("Hello world");
}

for (let i = 0; i < 5; i++){
   console.log("hello world");
}

for (let i = 0; i <= 4; i++){
    console.log("hello world");
}

for (let i = 0; i <= 4; i++){
    console.log("hello world  " +  i);
}

for (let i = 3; i < 5; i++){
    console.log("hello world " + i);
}

for (let i = 0; i < 10; i++){
   console.log("hello world " + i);
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 0; i < 10; i++){
    console.log(i + 1);
}

for (let i = 0; i < 10; i+=1){
     console.log(i + 2);
 }

 for (let i = 2; i < 9; i+=2){
console.log("hello world");
 }

for (let i = 2; i < 9; i += 3){
    console.log("hello world" + i);
}

// reverse loop
for (let i = 5; i > 0; i--){
    console.log("hello world " + i);
}

for (let i = 5; i > 0; i -= 1){
    console.log("hello world")
}

for (let i = 5; i < 4; i++){
    console.log("hello " + i);
}

for (let i = 5; i < 6; i++){
    console.log(i);
}

for (let i = 1; i > 0; i++){
   console.log("hello " + i);
}

//function inside loop

function greet() {
    console.log("Namaste!");
}
for (let i = 0; i < 5; i++){
    greet()
}

function gree(i) {
    console.log("Namaste! " + i);
}
for (let i = 0; i < 5; i++){
    gree(i)
}

// array and loop works together

//array
let arr = [10, 6, 2, 0, 8, 3];
console.log(arr[0]);
console.log(arr[5]);

//length of an array
let array = [10, 6, 2, 0, 8, 3];
let length = array.length;
console.log(length);

let array2 = [10, 6, 2, 0, 8, 3];
let length2 = array2.length;
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log(array2[4]);
console.log(array2[5]);

//instead of this use loop here 
let arr2 = [10, 6, 2, 0, 8, 3];
for (let i = 0; i < arr2.length; i++){
    console.log(arr[i]);
}

let arr3 = [10, 6, 2, 0, 8, 3];
for (let i = 0; i < length; i++){
    console.log(arr[i]);
}

// print all the even numbers from array

let arr4 = [10, 6, 2, 0, 8, 3, 1, 5, 7, 9, 11];
for (let i = 0; i < arr.length; i++){
    if (arr4[i]%2== 0) {
        console.log(arr[i]);
    }
}

//odd
let arr5 = [10, 6, 2, 0, 8, 3, 1, 5, 7, 9, 11];
for (let i = 0; i < arr5.length; i++){
    if (arr5[i] % 2 != 0) {
        console.log(arr5[i]);
    }
}

//while loop
let i = 0;
while (i < 5) {
    console.log("hello " + i);
    i++;
}
