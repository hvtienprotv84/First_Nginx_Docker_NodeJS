// const http = require('http')
// const server = http.createServer((req, res) => {
// 	res.writeHead(200, { 'content-type': 'text/html' })

// 	if (req.url === '/') {
// 		res.write('<h1>Node and Nginx on Docker123 is Working</h1>')
// 		res.end()
// 	} else {
// 		res.write('<h1>404 Nout Found</h1>')
// 		res.end()
// 	}
	
// })

// server.listen(process.env.PORT || 3000, () => console.log(`server running on ${server.address().port}`))


const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Xác định đường dẫn tệp
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);

    // Xác định loại nội dung dựa trên phần mở rộng tệp
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        // Thêm các loại nội dung khác nếu cần
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err404, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
