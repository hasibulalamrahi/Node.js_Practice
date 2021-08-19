const tech = ['npm','react.js','node.js','vue.js']
var a = 44;
function random(){
    console.log("This is a random text");
}


//we have to decide which files we have to export 
// module.exports = tech; // for single export

//for multiple exports we can do the followings
module.exports = {
     tech,
     a,
    random
}

//what is module here? 
// console.log(module); //so module is an object which have filename , loaded , children , path etc