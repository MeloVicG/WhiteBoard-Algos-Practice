// solution
function insertionSort(arr){
    for(var i=0; i < arr.length; i++ ){
        var currentVal = arr[i]
        for(var j= i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr);
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}


nums = [5,20,2,1,4]
insertionSort(nums)



//loop through the array and compare each index with its lesser value?



// insertionSort builds up an array by gradually sorting
// a larger left half which is always sorted

//ex:
//    *
// [5,3,4,1,2]
//      *
// [3,5,4,1,2]
//        *
// [3,4,5,1,2]
//          *
// [1,3,4,5,2]