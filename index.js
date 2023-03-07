const fs = require('fs')

// const readLine = require('readline')
// const fileStream = fs.createReadStream("file.txt")

// const rl = readLine.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
// })

// let lineCounter = 0;
// let twoNumbersLine;

// let testCases;
// let i = 1;

// let squareNumbers;
// let targetedSquares;

// let startingTargetedSquare;
// let startingTargetedSquareIndex = 0;

// let startedLines = false;

// rl.on("line", line => {
//     lineCounter += 1;
//     startedLines = false;

//     if (lineCounter == 1) {
//         testCases = +line
//     }

//     if (line.length === 3) {
//         twoNumbersLine = lineCounter;

//         squareNumbers = +line[0]
//         targetedSquares = +line[2]
//     }

//     if (lineCounter - twoNumbersLine === 1) {
//         startingTargetedSquare = line.split(" ").map(item => item = +item)
//         startingTargetedSquareIndex = lineCounter
//     }

//     if (startedLines) {


//         // while (i < targetedSquares) {
//         //     console.log(line)
//         //     i += 1;
//         // }
//     }
// })

const allLines = fs.readFileSync('file.txt', 'utf-8').split(/\r?\n/)

let lineCounter = 0;
let twoNumbersLine;

let testCases = +allLines[0];
let i = 1;

let squareNumbers = allLines.filter(line => line.length === 3);
let targetedSquares;

let startingTargetedSquare;
let startingTargetedSquareIndex = 0;

let startedLines = false;

for (let i = 1; i <= testCases; i++) {
    targetedSquares = allLines.filter((line, i) => {
        if (line.length === 4 && line.length === 3) {
            
        }
    })
}