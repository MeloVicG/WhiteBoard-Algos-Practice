
function isRotation(str, n){
    var temp = "";
    for(var i = str.length -n; i < str.length; i++){
        temp += str[i];
        console.log(temp);
    }
    for(var i = 0; i < str.length-n; i++){
        temp += str[i];
        console.log(temp);
    }
    return temp
}

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 2;
const expected2 = "ldHello Wor";


isRotation(str1, rotateAmnt2)