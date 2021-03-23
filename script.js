const hourHand = document.querySelector('#hour');
const minuiteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

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

  hourHand.style.transform = 'rotate(' + hrPosition + 'deg)';
  minuiteHand.style.transform = 'rotate(' + minPosition + 'deg)';
  secondHand.style.transform = 'rotate(' + secPosition + 'deg)';

  if (hrPosition % 30 === 0) {
    let notification = document.body.firstElementChild;
    const message = 'Hour Clock Reminder.....go and review your todo list';
    notification.textContent = message;
    const alarm = new Audio('beep.mp3');
    alarm.play();
  }
}

setInterval(runTheClock, 1000);
