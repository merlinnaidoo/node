const fs = require('fs');
const path = require('path');

// //create folder
// fs.mkdir(path.join(__dirname,'/test'), {}, err => {
// if(err) throw err;
// console.log('Folder created');
// });

//write file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'hi', err => {
    if(err) throw err;
    //this is the callback code with error above and what you want to do below
    console.log('Folder file write');

    //write file
    fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), 'node bra', err => {
        if(err) throw err;
        console.log('Folder file write');
    });
});

