    var fs = require('fs')
    fs.readFile('1287text.txt',function(err,data){
        console.log(data.toString());
       // console.log("File opened");

    })
    fs.writeFile('1287_text.txt',"Nice to meet you",function(err,data){
        console.log("Data Inserted");
    })
    fs.appendFile('1287_text.txt'," This is appended line",function(err,data){
        console.log("Data appended");
    })

