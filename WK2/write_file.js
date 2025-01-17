const fs = require('fs')

var data = Buffer.from("Hello  GBC")
fs.writeFile("output.txt",data, (err) =>
{ 
    if(err){
        console.log(err.message)
        return
    }

    console.log('Data written seccessfully...')
})

data2 = "Testing"

var error = fs.writeFileSync('output.txt', data2)
console.log("dATAA WRITTEN...")