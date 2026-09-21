// 4. Create a countdown timer.
let timeLeft = 10;
const countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    console.log('Time up!');
    return;
  }

  console.log(timeLeft);
  timeLeft -= 1;
}, 1000);
