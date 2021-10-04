const fs = require('fs')
const path = require('path')
var writeToFolder = './Logs';
let remove = function () {
    if (!fs.existsSync(writeToFolder)){
        console.log('no such a directory!');
        return;
    }
   fs.readdir(writeToFolder, (error, files) => {
        if(files.length==0){
        console.log('no files in this folder！')
        return;
        }
       if (error) throw error;
       for (const file of files) {

           fs.unlink(path.join(writeToFolder, file), error => {
                if (error) throw error;
            })
            console.log(`deleting files...${file}`)
       }
       fs.rmdirSync(writeToFolder);
   })
}
remove()