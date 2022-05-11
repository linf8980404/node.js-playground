//內建模組
const path = require('path');
const http = require('http');
//第三方模組套件


//自建模組
const hello = require('./hello');

//////////////////////////////////////////////

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log('req url:', req.url);
    if(req.url === '/login'){
        console.log('Login page')
    } 
	res.end();
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});