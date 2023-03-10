const fs = require('fs')

const allLines = fs.readFileSync('./miner/input.txt', 'utf-8').split(/\r?\n/)

allLines.forEach((line, i) => {
    if (line.trim().length === 0) {
        return allLines.splice(i, 1)
    }
    line.trim()
})

const testCases = +allLines[0]
let nextDataLineLocation = 1;

for (let a = 0; a < testCases; a++) {
    const dataLine = allLines[nextDataLineLocation];
    const gridSize = +dataLine.split(" ")[0];
    const colorNumber = +dataLine.split(" ")[1];
    const totalGems = +dataLine.split(" ")[2];

    let gemLine = nextDataLineLocation + 1;
    let allGems = [];
    
    let uniqueMinXSortedGems = [];
    let uniqueMaxXSortedGems = [];

    let uniqueMinYSortedGems = [];
    let uniqueMaxYSortedGems = [];

    // Get all gems
    for (let b = gemLine; b < gemLine + totalGems; b++) {
        allGems.push(allLines[b])
    }

    // Unique X minimum sorted gems
    allGems.sort((a, b) => +a.split(" ")[0] - +b.split(" ")[0])

    allGems.map(gem => {
        const retrievedGem = uniqueMinXSortedGems.find(uniqueIndex => uniqueIndex.split(" ")[2] === gem.split(" ")[2])
        if (!retrievedGem) {
            uniqueMinXSortedGems.push(gem)
        }
    })

    // Unique X maximum sorted gems
    allGems.sort((a, b) => +b.split(" ")[0] - +a.split(" ")[0])

    allGems.map(gem => {
        const retrievedGem = uniqueMaxXSortedGems.find(uniqueIndex => uniqueIndex.split(" ")[2] === gem.split(" ")[2])
        if (!retrievedGem) {
            uniqueMaxXSortedGems.push(gem)
        }
    })

    // Unique Y minimum sorted gems
    allGems.sort((a, b) => +a.split(" ")[2] - +b.split(" ")[2])

    allGems.map(gem => {
        const retrievedGem = uniqueMinYSortedGems.find(uniqueIndex => uniqueIndex.split(" ")[2] === gem.split(" ")[2])
        if (!retrievedGem) {
            uniqueMinYSortedGems.push(gem)
        }
    })

    // Unique Y maximum sorted gems
    allGems.sort((a, b) => +b.split(" ")[2] - +a.split(" ")[2])

    allGems.map(gem => {
        const retrievedGem = uniqueMaxYSortedGems.find(uniqueIndex => uniqueIndex.split(" ")[2] === gem.split(" ")[2])
        if (!retrievedGem) {
            uniqueMaxYSortedGems.push(gem)
        }
    })

    const firstXPoint = uniqueMinXSortedGems[0]
    const lastXPoint = uniqueMinXSortedGems[uniqueMinXSortedGems.length - 1]

    const firstYPoint = uniqueMinYSortedGems[0]
    const lastYPoint = uniqueMinYSortedGems[uniqueMinYSortedGems.length - 1]

    console.log(uniqueMinXSortedGems)
    console.log(uniqueMaxXSortedGems)

    console.log(uniqueMinYSortedGems)
    console.log(uniqueMaxYSortedGems)

    nextDataLineLocation = allLines.findIndex(line => line === allLines[nextDataLineLocation]) + totalGems + 1;
}

// fs.writeFileSync('./miner/output.txt', `Case #${counter}: ${counterNumber}\n`, { flag: "a+" }, err => {
//     if (err) {
//         console.log(err)
//     }
// })

console.log('finished')