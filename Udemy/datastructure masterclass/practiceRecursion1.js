// var months = ['jan', 'march', 'april']
// console.log(months);

// months.splice(0,3,'feb');
// console.log(months);

//-----------------------------------------------------

// function someRange(num){
//     if (num === 1) return 1;
//     console.log(num);
//     return num + someRange(num - 1)
// }

// console.log(someRange(3));

//-----------------------------------------------------
//------my factorial------
// function factorial(num){
//     for(let i = num; i > 0; i--){
//         console.log("firstone --",num, i);
//         num *= i-1//i = i*i-1
//         console.log('secondone --',num, i);
//     }
//     return num
// }

// console.log(factorial(5));

//--- my recrusive factorial----

function recursive(num) {
    if (num == 1) return 1;
    // let returnRecursive = num * recursive(num-1);
    // return console.log(returnRecursive); 
    console.log(num);
    return num * recursive(num - 1);
}

console.log(recursive(5));

//--- Udemys factorial----

// function factorial(num){
//     var total = 1;
//     for(var i = num; i > 1; i--){ 
//         total *= i
//         console.log(total);
//     }
//     return total;
// }

// console.log(factorial(8));

//----recursive version----

// function recursiveFactorial(num){
//     if (num===1) return 1;
//     console.log(num);
//     return num * recursiveFactorial(num-1);
// }

// console.log(recursiveFactorial(5));

//-----------------------------------------------------

//--------google recursion-----
//figuring out how recursion works with exponents

function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}


//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
