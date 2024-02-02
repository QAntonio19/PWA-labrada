// array = [1,2,3,4,5, "Foo","Bar",true,2.51]

// obj = {
//     firstName: "Foo",
//     lastName:"Bar",
//     age: 23,
//     status:true
// }

// console.log(array[5]);
// console.log(obj["firstName"]);
// console.log(obj.lastName);

// for (var i = 0; i < 1000; i++) {
//     console.log(i)
// }


// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
// }

// for (var i of array) {
//     console.log(i)
// }

// for (var key of obj) {
//     console.log(key)
// }

// for (var key of Object.keys(obj)){
//     console.log(key + ":  " +obj[key])
// }

// for (var key in obj) {
//     console.log(key + ":  " +obj[key])
// }

// var i = 0
// while (i < 10){
//     console.log(i)
//     i++
// }

// do {
//     console.log("--" + i)

// }while(i < 10)


// var x = 898

// if (x > 90) {
//     console.log("Si es mayor")
// } else {
//     console.log("No es mayor")
// }

// var animal = "Tiger"

// if (animal === "Tiger") {
//     console.log("it is a giant tiger")
// } else {
//     console.log("It's not a giant tiger")
// }

// var cat = (animal=== "Tiger") ? console.log("it is a giant tiger") : console.log("it's not a giant tiger");

// switch (animal) {
//     case "Tiger":
//         console.log("Case One")
//         break;
//     case "Puppy":
//         console.log("Case two")
//         break;
//     default:
//         console.log("Other wise")
//         break;
// }

// function prism(l) {
//     return function(w){
//         return function(h){
//             return l * w * h
//         }
//     }
// }
// console.log(prism(89)(12)(9))

// var msg = "hello world"
// const foo = (function(){
//     console.log("I'm the king " + msg)
//     return msg
// }(msg))

// console.log(foo)

// function prism(l, w, h) {
//     return l*w*h
// }

// console.log(prism(23,45,56))

// var namedSum = function sum (a, b) { 
//     return a + b;
// }
// var anonSum = function (a, b) { 
//     return a + b;
// }
// namedSum(1, 3);
// anonSum(1, 3);

// foo();
// var foo = function () { // using an anonymous function
// console.log('bar');
// }

// var say = function say(times){
//     say = undefined;
//     if (times > 0){
//         console.log("hello")
//         say(times - 1)
//     }
// }

// var saysay = say
// say = "Oops!"
// saysay(100)

function personSay(person, ...msg) {
    msg.forEach(arg => {
        console.log(person +  " say: " + arg)
    })
}

personSay("Foo","Hello","35","REACT","NATIVE","PWA")