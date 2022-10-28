'use strict'
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for (i = 11; i <= 33; i++) {
//     console.log(i);
// }

// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }  
// }

// let result = 0;
// for (i = 1; i <= 100; i++) {
//     result += i;
// }
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// for (let i in arr) {
//     console.log(arr[i]);
// }

// result = 0;
// const arr = [1, 2, 3, 4, 5];
// for (let i in arr) {
//     result += arr[i];
// }
// console.log(result);

// const obj = {'green': 'зеленый', 'red': 'красный','blue': 'синий'};
// for (let i in obj) {
//     console.log(i);
// }

// const obj = {'Коля': 200, 'Вася': 300, 'Петя': 400};
// for (let i in obj) {
//     console.log(`${i} - зарплата ${obj[i]}$`);
// }

// const arr = [2, 5, 9, 15, 0, 4];
// for(let i in arr) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// let result = 0;
// const arr = [-1, 5, 3, -9, 7]
// for (let i in arr) {
//     if (arr[i] > 0) {
//         result += arr[i];
//     }
// }
// console.log(result);

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i in arr) {
//     if (arr[i] == 4) {
//         console.log('Есть!');
//         break;
//     }
// }

// const arr = [10, 20, 30, 50, 235, 3000];
// for (let i in arr) {
//     if (String(arr[i])[0] == '1' ||
//     String(arr[i])[0] == '2' || 
//     String(arr[i])[0] == '5') {
//         console.log(arr[i]);
//     } 
// }

// let result = '';
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i in arr) {
//     if (i == 0) {
//         result += '-' + arr[i] + '-';
//     }
//     else {
//         result += arr[i] + '-';
//     }
// }
// console.log(result);

// const daysOfWeek = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// for (let i in daysOfWeek) {
//     if (i == '5' || i == '6') {
//         console.log(daysOfWeek[i].bold());
//     }
//     else {
//         console.log(daysOfWeek[i]);
//     }
// }

// let day = new Date().getDay();
// const daysOfWeek = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// for (let i in daysOfWeek) {
//     if (i == day - 1) {
//         console.log(daysOfWeek[i].italics());
//     }
//     else {
//         console.log(daysOfWeek[i]);
//     }
// }

// let n = 1000;
// let num = 0;
// do {
//     n /= 2;
//     num += 1;    
// } while (n > 50);
// console.log(num);