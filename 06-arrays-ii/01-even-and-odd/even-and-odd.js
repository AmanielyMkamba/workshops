// YOUR CODE BELOW
function evenAndOdd(arrNums) {
    let evenNums = [];
    let oddNums = [];
    let newArr = [evenNums, oddNums];

    for( let i = 0; i < arrNums.length; i++) {
        let currentNums = arrNums[i]
        if(currentNums % 2 === 0) {
            evenNums.push(currentNums);
        }
        else {
            oddNums.push(currentNums)
        }
    }
    return newArr;
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]))
