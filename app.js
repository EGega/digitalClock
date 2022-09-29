const paragraph = document.querySelector(".displayedClock")

const clockDisplayer = () => {
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds(); 
console.log(hours, minutes, seconds);
let amPm = "AM"
if(hours >= 12) {
amPm = "PM"
}
if (hours > 12) {
  hours = hours - 12
}
if (hours < 10) {
  hours = `0${hours}`
}
if (minutes < 10) {
  minutes = `0${minutes}`
}
if (seconds < 10) {
  seconds = `0${seconds}`
}
paragraph.innerHTML = `${hours}:${minutes}:${seconds} ${amPm}`
}


setInterval((clockDisplayer),1000 )
