const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

function runTheClock() {
  //get the current date at this very moment
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minuite = currentDate.getMinutes();
  const hour = currentDate.getHours();

  //converting to degrees
  let hrPosition = (hour * 360) / 12 + (minuite * (360 / 60)) / 12;
  let minPosition = (minuite * 360) / 60 + (seconds * (360 / 60)) / 60;
  let secPosition = (seconds * 360) / 60;

  HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';

  if (hrPosition % 30 === 0) {
    let notification = document.body.firstElementChild;
    const message = 'Hour Clock Reminder.....go and review your todo list';
    notification.textContent = message;
    const alarm = new Audio('beep.mp3');
    alarm.play();
  }
}

// runTheClock();
setInterval(runTheClock, 1000);

// function ringTheAlarm() {
//   let notification = document.querySelector('.main').firstElementChild;
//   const message = 'Hour clock Reminder.....go and review your todo list';
//   notification.textContent = message;
//   const alarm = new Audio('alarmSound.mp3');
//   alarm.play();
// }
// setInterval(ringTheAlarm, 360000);
