const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {



    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // }
    // console.log(req.url);
    // res.end('<h1>Hello World</h1>')

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('ERROR')
                } else {
                    res.writeHead(200, {
                        'Content-type': contentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-type': contentType
            })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}...`);
})