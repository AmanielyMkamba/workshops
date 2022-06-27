// YOUR CODE BELOW
function oddCouple(arr) {
    let newArr= [];
    if(arr%2===0) {
        return [];
    }
    for(let i = 0; i <= arr.length-1; i++) {
        if(arr[i]%2===1) {
            newArr.push(arr[i])
        }
        if(newArr.length === 2) {
            return newArr
        }
    }
    return newArr
}

console.log(oddCouple([10, 15, 20]))
console.log(oddCouple([1, 2, 3, 4, 5]))
console.log(oddCouple(2, 4, 6, 8))