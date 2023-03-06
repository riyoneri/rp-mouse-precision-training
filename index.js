const fs = require('fs')
// const readLine = require('readline')

// const fileStream = fs.createReadStream("file.txt")

// const rl = readLine.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
// })

// rl.on("line", (line, i) => {
//     console.log(line.split(" "))
// })

const lion = fs.readFileSync("./file.txt").toString().split("\n")

console.log(lion)