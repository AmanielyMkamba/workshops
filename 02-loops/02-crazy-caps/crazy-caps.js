// YOUR CODE BELOW

function crazyCaps(sentence) {
    let crazySentence = "";
    for(let i = 0; i < sentence.length; i++) {
        if(i % 2 === 0) {
            crazySentence += sentence[i].toLowerCase()
        }
        else {
            crazySentence += sentence[i].toUpperCase()
        }
    }
    return crazySentence
}
console.log(crazyCaps("fullstack is amazing"))
