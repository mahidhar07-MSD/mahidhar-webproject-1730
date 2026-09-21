let timeLeft = 10;
const timer = setInterval(() => {
  timeLeft--;
  console.log(timeLeft);
  if (timeLeft <= 0) clearInterval(timer);
}, 1000);
