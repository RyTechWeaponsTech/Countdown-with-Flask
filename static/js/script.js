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

// HTML DOM (Document Object Model) Document selector method
const theLocation = document.querySelector(".target-location");
const timeLeft = document.querySelector(".timeleft");
const formatTime = document.querySelectorAll(".format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureBirthday = new Date(2024, 6, 10, 14, 30, 0);

const year = futureBirthday.getFullYear();
const hours = futureBirthday.getHours();
const minutes = futureBirthday.getMinutes();
let month = futureBirthday.getMonth();
month = months[month];
const weekday = weekdays[futureBirthday.getDay()];
const date = futureBirthday.getDate();

// Manipulate the text of ".target-location"
theLocation.textContent = `Target Location: Jl. Medan Merdeka Barat No.92, DKI Jakarta | ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}`;

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

  // set array values
  const values = [days, hours, minutes, seconds];

  // manipulate every format element
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }

    return item;
  }

  formatTime.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    timeLeft.innerHTML = `<h4 class = "expired">NUCLEAR DETONATED</h4>`;
  }
}

let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime;

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year to the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;
