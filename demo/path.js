const path = require('path')

console.log('File name: ', path.basename(__filename))
console.log('Dirname name: ', path.dirname(__filename))
console.log('File ext: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename))