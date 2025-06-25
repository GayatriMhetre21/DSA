//star patterns
// *****
// *****
// *****
// *****
// *****

let n = 4;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + "*";
    }
    console.log(row);
}

// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
let m = 4;
for (let i = 0; i < 10; i++){
    let row = "";
    for (let j = 0; j < m; j++){
        row = row + "*";
    }
    console.log(row);
}

// **********
// **********
// **********
// **********

for (let i = 0; i < 4; i++){
    let row = "";
    for (let j = 0; j < 10; j++){
        row = row + "*";
    }
    console.log(row);
}

// *
// **
// ***
// ****

for (let i = 0; i < 4; i++){
    let row = "";
    for (let j = 0; j < i + 1; j++){                 //j<i+1
        row=row+"*"                                  //*
    }
    console.log(row);
}

// *****
// *****
// *****
// *****
// *****

for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j <= 4; j++){            //j<=4
        row = row + "*";                     //*
    }
    console.log(row);
}

// *
// **
// ***
// ****
for (let i = 0; i < 4; i++){
    let row = "";
    for (let j = 0; j <= i; j++){            //j<=i
        row=row+"*"                          //*
    }
    console.log(row);
}
// 1
// 12
// 123
// 1234
// 12345

for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j <=i; j++){        //or j<i+1;
        row = row + (j+1);               //(j+1)
    }
    console.log(row);
}

// 1
// 22
// 333
// 4444
// 55555
for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j < i + 1; j++){         //j<i+1
        row = row + (i + 1);                 //i+1
    }
    console.log(row);
}
// 1
// 22
// 333
// 4444
// 55555
for (let i = 0; i <= 5; i++){
    let row = "";
    for (let j = 0; j <= i; j++){       //j<=i
        row = row + (i);             //i+1 or i
    }
    console.log(row);
}

// 12345
// 1234
// 123
// 12
// 1
let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n-i; j++) {          //j<n-i
        row = row + (j + 1);                 //j+1
    }
    console.log(row);
}

// 11111
// 2222
// 333
// 44
// 5
let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n - i; j++) {          //j<n-i
       row = row + (i+1);  
    }
    console.log(row);
}

// 55555
// 4444
// 333
// 22
// 1
for (let i = 5; i >= 1; i--){
    let row = ""
    for (let j = 1; j <= i; j++){
        row = row + i;
    }
    console.log(row);
}

// *****
// ****
// ***
// **
// *
let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <n-i; j++){       //j<n-i
        row = row + "*";            //*
    }
    console.log(row);
}

//     *
//    **
//   ***
//  ****
// *****
let n = 5;
for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j < n - (i + 1); j++){
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++){
        row = row + "*";
    }
    console.log(row);
}

// 1
// 10
// 101
// 1010
// 10101
let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++){
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1;
        }
    }
    console.log(row);
}

// 1
// 01
// 010
// 1010
// 10101
let n = 5;
let toggle = 1;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < i + 1; j++){
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1;
        }
    }
    console.log(row);
}
