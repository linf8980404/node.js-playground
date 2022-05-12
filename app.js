//內建模組
const path = require('path');

//第三方模組套件
const express = require('express');
const bodyParser = require('body-parser');

//自建模組


//////////////////////////////////////////////

const app = express();

app.set('view engine', 'ejs');  //使用面板引擎EJS
app.set('views', 'views');  //資料夾

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});



app.get((req, res, next) => {
	console.log('World!');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
// });

app.get('/', (req, res) => {
    res.status(200).render('index');
});

app.get('/login', (req, res) => {
    res.status(200).render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

