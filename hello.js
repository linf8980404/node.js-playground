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

module.exports = {
    sayHello: sayHello,
    sayGoodnight,
        title: 'I am Hello Module'
};