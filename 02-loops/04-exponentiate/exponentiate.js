// YOUR CODE BELOW
function exponentiate(base, power) {
    let results = 1;
    for(let i = 0; i < power; i++) {
        results *= base;
    }
    return results
}
console.log(exponentiate(4,4))

function exponentiate(base, power) {
    return Math.pow(base, power)
}
console.log(exponentiate(4,4))