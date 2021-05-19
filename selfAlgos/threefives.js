function threesFives(num) {
    // Enter code below
    //create loop through num
    // if / by 3 or 5 skip
    // add counts
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            continue
        }
        else{
            count += i
        }
        console.log(count)
    }
    return count

}

threesFives(10)