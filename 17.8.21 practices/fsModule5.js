//Here we will be rading out files from a certain folder and delete them altogether

const fs = require('fs');

fs.readdir('./Example',(err,files)=>{

    if(err){
        console.log(err);
    }
    else{
        // console.log(files);  //reading out the file status
        for(let file of files){   //deletes all the files in the folder 
            fs.unlink('./Example/' +file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Successfully Deleted the file');
                }
            })
        }
    }
})