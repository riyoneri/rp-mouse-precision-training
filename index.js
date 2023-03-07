const fs = require('fs')

const allLines = fs.readFileSync('file.txt', 'utf-8').split(/\r?\n/)

let lineCounter = 0;

let testCases = +allLines[0];

let twoNumberedLines = allLines.filter((line, i) => {
    if (allLines[i].length === 3 && allLines[i + 1].length === 5) {
        return line
    }
});

let firstTargettedSquares = allLines.filter((line, i) => {
    if (allLines[i].length === 5 && allLines[i - 1].length === 3) {
        return line
    }
})

let targetedSquares = allLines.filter((line, i) => {
    if ((allLines[i].length === 5 && allLines[i - 1].length === 5) || (allLines[i].length === 5 && allLines[i + 1].length === 3)) {
        return line
    }
})


for (let i = 0; i < testCases; i++) {

    // console.log(twoNumberedLines[i])
    for (let j = 1; j <= +twoNumberedLines[i].split(" ")[1]; j++) {
        console.log(+twoNumberedLines[i].split(" ")[1])
    }
}