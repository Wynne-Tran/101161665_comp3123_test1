const fs = require('fs')
const path=require('path')
var writeToFolder = './Logs';
let add = function () {
    //create a Logs directory, if it does not exist
   if (!fs.existsSync(writeToFolder)){
       fs.mkdirSync(writeToFolder);
   }
   //change the current process to the new Logs directory
   try {
       process.chdir(writeToFolder);    
   }
   catch (error) {
       console.log('change dir error: ' + error);
   }
   let data = 'Thi Hoang Tram Tran, ID: 101161665';
   for(let count = 0; count < 10; count++){
    fs.writeFile(`log${count}.txt`, data, (err) => {
        if (err) throw err;
    })
    console.log( `log${count}.txt`);
   }
}
add()