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

// // call, bind and apply
// logMessage.call(object2);
