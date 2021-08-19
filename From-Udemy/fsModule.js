const fs = require('fs');
fs.readFile('./Text Files/read.txt','utf-8',(err,data1)=>{
    fs.readFile(`./Text Files/${data1}.txt`,'utf8',(err,data2)=>{
        console.log(data2);
        fs.readFile('./Text Files/random.txt','utf8',(err,data3)=>{
            console.log(data3);

            fs.writeFile('./Text Files/writenFile.txt',`${data2}\n ${data3}`,'utf8',(err)=>{
                console.log('File is written successfully');
            })
        })
    })
})

console.log('We are using the module asynchronously');