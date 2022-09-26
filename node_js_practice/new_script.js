console.log("Hello world!");
// Задание 1
let week = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};
let dateNow = new Date();
let dayNow = dateNow.getDay();

// Задание 2
let str = "abcde";
console.log(str[0]);
console.log(str[2]);
console.log(str[3]);
// Задание 3
let array = [1, 2, 3, 4, 5];
for (let elem in array) {
  console.log(elem);
}
// Задание 4
let obj = {
  Минск: "Беларусь",
  Москва: "Россия",
  Киев: "Украина",
};
for (const key in obj) {
  console.log(`${key} - это ${obj[key]}`);
}
// Задание 5
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
