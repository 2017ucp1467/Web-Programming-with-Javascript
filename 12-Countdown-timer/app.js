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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let mydate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 59);
const year = mydate.getFullYear();
const month = months[mydate.getMonth()];
const hrs = mydate.getHours();
const mins = mydate.getMinutes();
const secs = mydate.getSeconds();
const date = mydate.getDate();
const weekday = weekdays[mydate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday},${date} ${month} ${year} ${hrs}:${mins}:${secs}pm.`;

// future time in ms
const futureTime = mydate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const diff = futureTime - today;

  const msinDay = 24 * 60 * 60 * 1000;
  const msinHour = 60 * 60 * 1000;
  const msinMinute = 60 * 1000;

  let days = Math.floor(diff / msinDay);

  let hrs = Math.floor((diff % msinDay) / msinHour);
  let mins = Math.floor((diff % msinHour) / msinMinute);
  let secs = Math.floor((diff % msinMinute) / 1000);

  // set values array;
  const values = [days, hrs, mins, secs];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });

  if (diff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired. </h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
