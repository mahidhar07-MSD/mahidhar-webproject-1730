// 2. Create a digital clock.
function showClock() {
  const now = new Date();
  const timeText = now.toLocaleTimeString();
  console.log(timeText);
}

setInterval(showClock, 1000);
