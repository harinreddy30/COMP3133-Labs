const fs = require('fs')

var data = " I am appended last"

// fs.appendFile('output.txt', data, (err) => {
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log("Data Appended")

// })

// const error = fs.appendFileSync('output.txt', "Appended 1st using sync")

async function readData(){
    try {
        const data = await fs.promises.readFile('input.txt')
        console.log(data.toString())
    } catch (error) {
        console.log(error)
    }
}

readData()