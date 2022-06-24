// YOUR CODE BELOW

function onlyOdds(num) {

    let sumOdds = 0;

    for(let i = num; i >= 1; i--) {
        if(i % 2 === 1) {
            sumOdds += i;
        }
    }
    return sumOdds
}

console.log(onlyOdds(6))
