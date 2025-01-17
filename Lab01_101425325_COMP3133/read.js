const csv = require('csv-parser');
const fs = require('fs');

const writeStream = fs.createWriteStream('canada.txt', { flags: 'a' });
let headersWritten = false;


fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        const country = row[Object.keys(row)[0]].split(' ')[0]
        if(country === 'Canada'){
            if (!headersWritten) {
                writeStream.write('country,year,population\n');
                headersWritten = true; 
            }
            const data = `${row.country},${row.year},${row.population}\n`;
            writeStream.write(data)
        }
    })
    .on('end',()=>{
        writeStream.end();
        console.log('Filtered Rows to canada.txt')
    })
    .on('error', (err) =>{
        console.log(err.message)
    })