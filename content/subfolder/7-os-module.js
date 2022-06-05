const os = require('os');

const user = os.userInfo();

console.log(`The system has been running ${os.uptime()/60.0} mins`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);