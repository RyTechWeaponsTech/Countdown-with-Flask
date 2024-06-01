// variable for month lists

const months = [
  "January",
  "February",
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
  
// variable for day lists
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timeLeft = document.querySelector(".timeleft");
const formatTime = document.querySelectorAll(".format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureBirthday = new Date(2025, 0, 26, 2, 30, 0);

const year = futureBirthday.getFullYear();
const hours = futureBirthday.getHours();
const minutes = futureBirthday.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureBirthday.getDay()];
const date = futureBirthday.getDate();

const futureTime = futureBirthday.getTime();

// this function for get remainding time
function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate the values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
}

let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime;