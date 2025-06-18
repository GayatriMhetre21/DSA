//function vote
function eligibletovote(age) {
    if (age < 0) {
        console.log("invalid");
    }
    else if (age < 18) {
        console.log("not eligible");
    }
    else {
        console.log("eligible");
    }
}

eligibletovote(30);
eligibletovote(10);
eligibletovote(-1);


function eligibletovotenew(age) {
    if (age < 18) {
        console.log("not eligible");
    }
    else {
        console.log("eligible");
    }
}
eligibletovotenew(10);
eligibletovotenew(19);

//check odd or even
function oddoreven(num) {
    //let rem = num % 2;
    //if (rem==0) {
    if (num % 2==0){
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
oddoreven(4);
