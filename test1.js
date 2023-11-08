// Asyn await
// Always returns a promise



const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It is resolve")
    }, 10000);

});

async function handlePromise() {
    const value = await p;
    console.log(value);
    console.log("Actually resolved");

};

handlePromise();







// async function getData() {
// return "Hello"
// }

// getData().then((data)=>{
//     console.log(data);
// })


// Promises

// const cart = ["shoes", "pants", "kurta", "jean"];

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {

//         if (!validateCart(cart)) {
//             const error = new Error("Error")
//             reject(error);
//         }

//         const orderId = "123455";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 3000);
//         }
//     });

//     return pr;
// }

// function validateCart(cart) {
//     return true;
// }


// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     // paymentDone(orderId)
//     console.log(orderId);
// }).catch((error) => {
//     console.log("error can't resolve");
// });


// creatorder(cart).then(function (orderid) {
//     return proceedToPayment(orderId);
// }).then(function (paymentInfo) {
//     return showSummer(paymentInfo);
// }).then(function (paymentInfo) {
//     return showSummer(paymentInfo);
// })


// const GITHUB_API = "https://api.github.com/users/ankitkapoor8437"

// const users = fetch(GITHUB_API);

// users.then(function (data) {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })



// Callback hell
// Inversion of control

// const cart = ["shoes", "pants", "kurta", "jean"];

// api.createOrder(cart, function () {
//     api.payment(function () {
//         api.showOrder(function () {
//             api.wallet();
//         })
//     });
// });



// Higher order function

// function area(radius) {
//     return Math.PI * radius * radius;
// };

// function circum(radius) {
//     return 2 * Math.PI * radius
// };

// function diameter(radius) {
//     return 2 * radius;
// }


// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }


// const radius = [3, 1, 2, 5];

// console.log(radius.map(area))
// console.log(radius.calculate(area));
// console.log(radius.calculate(circum));
// console.log(radius.calculate(diameter));

// console.log(calculate(radius, area))
// console.log(calculate(radius, circum))
// console.log(calculate(radius, diameter))


// function out(b) {
//     function inn() {
//         console.log(a,b);
//     }
//     const a = 10;
//     return inn;
// }

// var output = out("Heeloo");
// output();

// const users = [{
//     "id": 1,
//     "first_name": "Caroljean",
//     "last_name": "Semarke",
//     "age": 24
// }, {
//     "id": 2,
//     "first_name": "Gib",
//     "last_name": "Schimaschke",
//     "age": 37
// }, {
//     "id": 3,
//     "first_name": "Cam",
//     "last_name": "Wanell",
//     "age": 97
// }, {
//     "id": 4,
//     "first_name": "Inness",
//     "last_name": "Bramford",
//     "age": 63
// }, {
//     "id": 5,
//     "first_name": "Tally",
//     "last_name": "Mayo",
//     "age": 29
// }]


// const fullName = users.map((element) => {
//     return element.first_name + " " + element.last_name
//     console.log("The full name is" + " " + element.first_name, element.last_name)
// });

// console.log(fullName);


// const ageFilter = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1
//     }
//     return acc;
// }, {});

// console.log(ageFilter);

// const findName = users.filter((users) => users.age < 30 ).map((user) => user.first_name);
// console.log(findName);


// map function
// function double(element) {
//     return element * 2;
// };

// const modifiedArr = arr.map((element) => {
//     return element.toString(2);
// });

// filter function
// const isOdd = arr.filter((element) => {
//     return element % 2 === 0;
// });

// console.log(isOdd);


// reduce function
// function findSum(arr) {
//     let max = 0;
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > max) {
//             max = arr[index]
//         }
//     }
//     return max;
// }

// const reduceEx = arr.reduce((max, curr) => {
//     if (max > acc) {
//         acc = max;
//     }
//     return max;
// }, 0);

// console.log(findSum(arr));
// console.log(reduceEx);


// setTimeout(function timer() {
//     console.log("Test engine")
// }, 1000);


// testFunction();
// // function statement or declaration
// function testFunction(params) {
//     console.log("Hello");
// }

// // expression
// let a = function testFunctionExpression(params) {
//     console.log("Hello");
// }
// a();

// // anonymous
// var b = function (param1, param2) {
//     console.log("Hello", param1, param2);
// }
// b(2, 3);


// Arrow functions



// Call back functions
// setTimeout(function () {
//     console.log("timer")
// }, 3000);

// function x(y) {
//     console.log("x");
//     y();

// }

// x(function y() {
//     console.log("y");
// })
