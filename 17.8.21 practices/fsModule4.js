const fs = require('fs');
fs.writeFile('example.txt',"this is an example text file",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Our File is successfully created');
        fs.readFile('example.txt','utf-8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        })
    }
})

fs.rename('example.txt','random_example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Renaming the file is sucessfull");
    }
})