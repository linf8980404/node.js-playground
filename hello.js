const path = require('path'); 


const sayHello = () => {
    console.log('Hello!');
};


const sayGoodnight = () => {
    console.log('Good night!');
};
// module.exports.sayHello = sayHello;

// module.exports = {
//     sayHello: sayHello,
//     sayGoodnight: sayGoodnight,
//         title: 'I am Hello Module'
// };

console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname, 'index.js'));

module.exports = {
    sayHello: sayHello,
    sayGoodnight,
        title: 'I am Hello Module'
};


console.log('module', module);