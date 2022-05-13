const fs = require("fs");
let data="This is a file containing a collection of books.";

fs.writeFile("hi.txt",data, function(err){
    if(err){
        return console.log(err);
    }
    else{
    console.log("The file was saved");
    console.log("The written has the folowing contents:");
    console.log(fs.readFileSync("hi.txt","utf-8"));
    }
});

fs.readFile("hi.txt","utf-8",function(err,data){
    console.log(data);
});
console.log("readFile called");