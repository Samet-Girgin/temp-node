const os = require('os')

//info current user
const user = os.userInfo()
console.log(user)

//sistemin kaç saniye açık gösteriyor
console.log(`the sysmte uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)


