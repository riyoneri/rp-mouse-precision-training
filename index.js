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

let allTargetedSquares = []
let subSquares = [];

let positionCounter = 0;

allLines.filter((line, i) => {
    if ((allLines[i].length === 5 && allLines[i - 1].length === 5) || (allLines[i].length === 5 && allLines[i + 1].length === 3)) {
        if ((allLines[i].length === 5 && allLines[i - 1].length === 5 && !(!allLines[i + 1] || allLines[i + 1].length === 3))) {
            subSquares.push(allLines[i])
        }

        if ((allLines[i].length === 5 && (!allLines[i + 1] || allLines[i + 1].length === 3))) {
            subSquares.push(allLines[i])
            allTargetedSquares.push(subSquares)

            allTargetedSquares[positionCounter].unshift(firstTargettedSquares[positionCounter])

            positionCounter += 1;
            subSquares = []
        }
    }
})

let totalDistances = [];
let sortedarr = [];


let firstDistance;
let secondDistance;
let remainingTargetedSquares;

let targetedSquareLimit;

for (let i = 0; i < testCases; i++) {
    remainingTargetedSquares = allTargetedSquares[i].length
    targetedSquareLimit = +twoNumberedLines[i][2]

    let j = 0;
    while (j < targetedSquareLimit) {
        console.log(allTargetedSquares[i][j])

        j++;
    }
    // console.log(targetedSquareLimit)
}
