// YOUR CODE BELOW
function oddCouple(arrNums) {

    let oddNums= [];

    for(let i = 0; i <= arrNums.length-1; i++) {

        let currentNums = arrNums[i];

        if(currentNums % 2===1) {
            oddNums.push(currentNums)
        }
        if(arrNums.length === 2) {
            return oddNums
        }
    }
    return oddNums
}

console.log(oddCouple([10, 15, 20]))
console.log(oddCouple([1, 2, 3, 4, 5]))
console.log(oddCouple(2, 4, 6, 8))