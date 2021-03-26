
//---best solution---

function bubbleSort(arr){
    for(var i = arr.length; i > 0 ; i--){
        for(var j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                //this is swap
                var temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
        console.log("one Iteration");
    }
    // console.log(arr)
    return arr
}

bubbleSort([8,5,2,9,4])




//has an undefined extra comparison

// function bubbleSort(arr){
//     for(var i = 0; i < arr.length ; i++){
//         for(var j = 0 ; j < arr.length; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //this is swap
//                 var temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp;

//             }
//         }
//     }
//     console.log(arr)
//     return arr
// }

// bubbleSort([8,5,2,9,4])


// //---my bubble sort----
// function bubbleSort(arr){
//     for(var i=0;  i < arr.length ; i++){
//         for(var j=0; j < arr.length ; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if (arr[j] > arr[j+1]){
//                 //swap here
//                 var temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//         console.log("one Iteration");
//     }
//     // console.log(arr);
//     return arr
// }
// bubbleSort([8,5,2,9,4])





