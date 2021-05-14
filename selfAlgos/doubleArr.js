
function double(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2 )
        console.log(output)
    }
    return output
}

double([1,2,3])