const os = require('os')
console.log('OS: ', os.platform());
console.log('Processor Arch:', os.arch());
console.log('CPU info:', os.cpus());
console.log('Free memory:', os.freemem());
console.log('All memory:', os.totalmem());
console.log('Home dir:', os.homedir());
console.log('OS uptime', os.uptime());