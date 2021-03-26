


function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var min = i;
        for(var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        console.log("final array ----", arr);
    }
    return arr;
};

nums = [5, 3, 4, 22, 1, 2];
selectionSort(nums);



    // store a empty value as the smallest
    // compare this value to the array until you find a smaller number to be
    //      the new minimum
    // if new min is not old min index, swapcc