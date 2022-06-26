// YOUR CODE BELOW
function exponentiate(base, power) {
    let results = 1;
    for(let i = 0; i < power; i++) {
        results *= base;
    }
    return results
}
console.log(exponentiate(3,4))