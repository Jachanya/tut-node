const fs = require('fs')

fs.readFile('./content/first.txt','utf8', (err, result1)=>{
    if(err){
        console.log(err);
        return;
    }
    
    fs.readFile('./content/second.txt', 'utf8', (err, result2) =>{
        if(err){
            console.log(err);
            return;

        }

        fs.writeFile('./content/new-content.txt', `file1: ${result1}, file2: ${result2}`, (err, result) => {
            if(err){
                console.log(err);
            }
            console.log(result);
        });
    })
})