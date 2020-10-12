// file system
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('Dir created')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'hello nodeJS', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('File created!')
// })
// fs.appendFile(filePath, '\nhello nodeJS Again', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('File appended!')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content);
    // const data = Buffer.from(content)
    // console.log(data.toString())
})