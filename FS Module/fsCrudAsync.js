//In this code we will be developing a CRUD application using fs module
//We will be creating a folder 
//we will be Renaming that folder
//we will be Reading data from that folder
//we will be deleting that folder

const e = require('express');
const fs = require('fs');
fs.mkdir('myFolder',(err)=>{
    console.log('Folder Created') //To create a Folder
});

fs.writeFile('./myFolder/bio.txt',"we are creating a file and writing data on it",(err)=>{   //Asynchronously Writing on that text file
    console.log("Text file is created");
});

fs.appendFile('./myFolder/bio.txt',' we are now appending text in this folder',(err)=>{         //Apending text on the same text file
    console.log("Text is appended");
});
fs.readFile("./myFolder/bio.txt",'utf-8',(err,data)=>{                                   //Reading from that text file 
    console.log(data);                           
});

fs.rename('./myFolder/bio.txt',"./myFolder/myBio.txt",(err)=>{
    console.log("We have successfully changed the text file name");
});

fs.unlink('./myFolder/random.txt',(err)=>{
    console.log("File is Deleted");                       //To delete a text file
})

fs.rmdir('./randomFolder/',(err)=>{                              //removing the folder named randomFolder 
    console.log("Folder is deleted");
})

// fs.open('./myFolder/myBio.txt','r',(err,file)=>{
//     console.log('The file is opened ');
// })

fs.exists('./myFolder/myBio.txt',(result)=>{
   if(result){
       console.log("The file exists");
   }    
   else{
    console.log('The file does not exists ');
   } 
});