//Sekranize bütün işlemler sıralı yapılıyor bundan dolayı 
//aynı anda tek kişi tarafından yapılabiliyor çok yavaş
console.log("start");
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second);
//file yarattı içine yazı yazdı bu satır 
//yazdıpın path yoksa oluşturuyor
writeFileSync('./content/result-sync.txt',`result: ${first},${second}`,
//flag override yapıyor her çalıştırınca tekrar tekrar yazıyor
{flag: 'a'})
console.log("finished");