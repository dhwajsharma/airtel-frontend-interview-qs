// Q1: find a loop in linkedlist

// class LinkedList {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const head = new LinkedList(10);
// const temp1 = new LinkedList(20);
// const temp2 = new LinkedList(30);
// head.next = temp1;
// temp1.next = temp2;
// temp2.next = head;

// function floydCycleDetection() {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(floydCycleDetection());

// Q2
// var name = "Dhwaj";

// (function () {
//   console.log(this.name); // Dhwaj
// })();

// Q3
// var name = "Dhwaj Sharma";

// const obj = {
//   name: "Dhwaj",
//   a: function () {
//     console.log(this.name);
//   },
//   b: () => {
//     console.log(this.name);
//   },
// };

// obj.a();
// obj.b();

// Q4
// function Person(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }

// const p = new Person("Dhwajj");
// console.log(p.getName());

// Q5
// const object = {
//   message: "Hello",
//   logMessage() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMessage, 1000); // undefined
// it will point to the windows object

// Q6
// const object2 = {
//   message: "hello world",
// };

// function logMessage() {
//   console.log(this.message);
// }

// logMessage.call(object2);

// Q7: currying
// function sum(a) {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// }

// console.log(sum(1)(2)(3)());

// Q8: debouncing
// const debounce = (func, d) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, d);
//   };
// };

// const printName = () => {
//   console.log("Hey Dhwaj");
// };

// debounce(printName, 2000)();

// Q9: [1,2,-1,3,-2] 5 Max sum subarray
// const maxSum = (arr) => {
//   let result = 0;
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let curr = 0;
//     for (let j = 0; j < n; j++) {
//       curr = curr + arr[j];
//       result = Math.max(result, curr);
//     }
//   }
//   return result;
// };

// console.log(maxSum([1, 4, -3, 2, -4, 5]));

// Q9: [1,2] => [{1:1, 2:2}]
// const modArr = (arr) => {
//   return arr.map((el) => {
//     return { [el]: el };
//   });
// };

// console.log(modArr([1, 2]));

// Q10: React testing -> Jest and RTL talk about spy user event assertion

// Q11: closure + setTimeout
// function x() {
//   for (var i = 1; i <= 3; i++) {
//     function y(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//     y(i);
//   }
// }

// x();

// Q12: event loop -> callstack callback q and microtask q web apis sync

// Q13: todo app
