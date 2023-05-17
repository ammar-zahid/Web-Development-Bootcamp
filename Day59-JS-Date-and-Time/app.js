let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

let month = date.getDate();
console.log(month);

let hours = date.getHours();
console.log(hours);

function displayTime(){
    time.innerHTML = new Date();
}
setInterval(displayTime, 1000);
