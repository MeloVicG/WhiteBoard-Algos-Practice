function sigma(num) {
    // Enter code below
    let output = 0;
    for (let i = 1; i < num + 1; i++) {
        output += i
        console.log(output)
    }
    return output
}

sigma(5)