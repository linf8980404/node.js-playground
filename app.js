//內建模組
const path = require('path');

//第三方模組套件
const express = require('express');
const bodyParser = require('body-parser');

//自建模組


//////////////////////////////////////////////

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'login.html'));
});

// app.post('/login', (req, res) => {
//     const  { email, password } = req.body;
//     console.log('Form Data', req.body);
//     console.log('Form email', req.body);
//     console.log('Form password', req.body);
// });

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});
app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

