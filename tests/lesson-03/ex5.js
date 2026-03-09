//print out the result of 1000 to 2000, which one is divided by 3
let checkingResult = "From 1000 to 2000, we have a list of number that is divided by 3 is ";
for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) checkingResult = checkingResult + i + "; ";
}

//print out the result
console.log(checkingResult);