//內建模組
const path = require('path');

//第三方模組套件
const express = require('express');

//自建模組


//////////////////////////////////////////////

const app = express();

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

