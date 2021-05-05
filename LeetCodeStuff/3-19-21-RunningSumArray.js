

function runningSumArray(arr){
    var runningSum = 0;
    var sumArr = []
    for(i=0 ; i < arr.length ; i++){
        runningSum += arr[i];
        sumArr[i] = runningSum;
    }
    console.log(sumArr);
    return sumArr
}

var nums = [1,2,3,4]
runningSumArray(nums)

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

//create a variable to keep track of running sum
//create forloop to iterate arr
//iterate running sum through array 