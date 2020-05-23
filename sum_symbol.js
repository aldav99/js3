function sumCodeOfSymb(word) {
    return word.split('')
        .reduce((acc, currentItem) =>
            acc + currentItem.charCodeAt(), 0)
}

function wordToSumCodeOfSymb(inputWord) {

    return { word: inputWord, sum: sumCodeOfSymb(inputWord) }
}


function strToWordToSumCodeOfSymb(str) {
    return str.split(" ")
        .filter(item => item.length > 0)
        .map(wordToSumCodeOfSymb);
}

console.log(strToWordToSumCodeOfSymb("Lorem ipsum dolor sit amet."));