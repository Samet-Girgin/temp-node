const {readFileSync,writeFileSync, readFile, writeFile} = require('fs');
//Sekronoze deil çünkü orta kısmı atlayıp sona gidiyor sonra geri dönüp hallediyor
console.log("start");
readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        } 

        const second = result
        writeFile('./content/result-async.txt',`result: ${first},${second}`,
        (err,result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
            console.log("done");

        })
    })

    //console.log(result);
})
console.log("to next");
//if we dont code udf we get buffer
//<Buffer 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>