const fs = require('fs')

const allLines = fs.readFileSync('./metaverse/file.txt', 'utf-8').split(/\r?\n/)

fs.writeFileSync('./metaverse/output.txt', ``, err => {
    if (err) {
        console.log(err)
    }
})

allLines.forEach((line, i) => {
    if (line.trim().length === 0) {
        return allLines.splice(i, 1)
    }
    line.trim()
})

let counter = 0;

let attendanceArray = [];
let friendAttendDays = []


for (let i = 1; i < allLines.length; i = i + 2) {
    counter++
    const friendsNumber = +allLines[i].split(" ")[0];
    const totalDays = +allLines[i].split(" ")[1];

    for (let k = 0; k < friendsNumber; k++) {
        for (let l = 0; l < totalDays; l = l + +allLines[i + 1].split(" ")[k]) {
            friendAttendDays.push(l + 1)
        }
        attendanceArray.push(friendAttendDays)
        friendAttendDays = []
    }


    attendanceArray = attendanceArray.sort((a, b) => a.length - b.length)

    let returnObj = []
    let counterNumber = 0

    for (let m = 1; m <= totalDays; m++) {
        for (let n = 0; n < attendanceArray.length; n++) {
            if (attendanceArray[n].includes(m)) {
                returnObj.push('true')
            } else {
                returnObj.push('false')
            }
        }

        let me = false;

        for (let y = 0; y < returnObj.length; y++) {
            if (returnObj[y] === 'false') {
                break;
            } else {
                if (y == returnObj.length - 1 && returnObj[y] === 'true') {
                    me = true;
                } else {
                    continue;
                }
            }
        }

        if (me) {
            counterNumber++;
        }
        returnObj = []
    }

    fs.writeFileSync('./metaverse/output.txt', `Case #${counter}: ${counterNumber}\n`, { flag: "a+" }, err => {
        if (err) {
            console.log(err)
        }
    })

}
console.log('finished')