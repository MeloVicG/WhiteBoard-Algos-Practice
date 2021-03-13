
//udemy recursion set practice
//--------------------------------------------------------------------

//---make power----

power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16

function power(num, exp) {
    // num * number of exp
    var c = 1;
    for (var i = 1; i <= exp; i++) {
        c *= num
    }
    return c;
}
//----google-----recursion version
// var exponent = function (a, n) {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return a * exponent(a, n - 1);
//     }
// };
// console.log(exponent(4, 2));

//--------------------------------------------------------------------

// productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60


function productOfArray(arr){
    let result = [] //need to have array to put product of arrays into
    if(arr.length === 0 ) {
        return;
    }
    for(i=0 ; i < arr.length - 1; i++){
        let sum = arr[i] * arr[i+1]
        result.push(sum)
        console.log("footloop: ", result);
    }
    console.log("final result: ", result);
    return result;
}

//--------recursion-------version
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    console.log(arr);
    return arr[0] * productOfArray(arr.slice(1));
}
productOfArray([1,2,3,10])
//-----------------------------------------------------------------


//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------