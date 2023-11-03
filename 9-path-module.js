const { log } = require('console');
const path = require('path')
//seperator file pathin de kullanılan ayıracı gösteriyor
console.log(path.sep);
//path oluşturma
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//file son dosya yerini gösteriyor
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfoler','test.txt')
console.log(absolute)