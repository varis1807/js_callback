const fs = require("fs");
let data="hi";
fs.writeFile("f1.txt", data, function (err) {
  if (err){
       return console.log(err);
  }
  else{
      console.log("i am writing");
  console.log(fs.readFileSync("f1.txt","utf-8"));
}
});
