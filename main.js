let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

function time() {
       let date = new Date();
       let nhour = date.getHours();
       let nminute = date.getMinutes();
       let nsecond = date.getSeconds();
       if (nhour < 10) {
              hour.innerHTML = `0${nhour}`;
       } else {
              hour.innerHTML = nhour;
       }
       if (nminute < 10) {
              minute.innerHTML = `0${nminute}`;
       } else {
              minute.innerHTML = nminute;
       }
       if (nsecond < 10) {
              second.innerHTML = `0${nsecond}`;
       } else {
              second.innerHTML = nsecond;
       }
}
time();
let clock = setInterval(time, 1000);
