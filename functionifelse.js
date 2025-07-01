
//eligible to vote  if else
function eligibletovote(age) {
    if (age > 18) {
        console.log("eligible to vote...");
    }
    else {
        console.log("not eligible to vote...");
    }
}
eligibletovote(21);

function vote(age) {
    if (age < 0) {
        console.log("invalid input.....");
    }
    else if (age > 18) {
        console.log("eligible to vote....");
    }
    else {
        console.log("not eligible to vote...")
    }
}
vote(-1);

function evenodd(num) {
    if (num % 2 == 0) {
        console.log("even..");
    }
    else {
        console.log("odd..");
    }
}
evenodd(3)
