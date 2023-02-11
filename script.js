"use strict";
const obj = new Date();
// console.log(obj);
const monthsArr = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthEl = document.querySelector("h1");
const fullTimeDet = document.querySelector("p");
const daysEle = document.querySelector(".days");
const currDay = obj.getDate();
// console.log(currDay);
const lastDayEl = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();
// console.log(lastDayEl);
let firstDay =
  new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() - 1;
// console.log(firstDay);
if (firstDay === -1) firstDay = 6;
const dateIndex = obj.getDay(); //0
const day = _days[dateIndex]; //Sun
const month = monthsArr[obj.getMonth()]; //Jan
const date = obj.getDate();
// console.log(date);
const year = obj.getFullYear();
monthEl.innerText = month;
fullTimeDet.innerText = `${day} ${month} ${date} ${year}`;

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(lastDayEl);

let days = "";
for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDayEl; i++) {
  if (i == currDay) {
    days = days + `<div class="today">${currDay}</div>`;
  } else {
    days = days + `<div>${i}</div>`;
  }
}
daysEle.innerHTML = days;
