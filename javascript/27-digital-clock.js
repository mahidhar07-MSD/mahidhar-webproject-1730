function updateClock() {
  console.log(new Date().toLocaleTimeString());
}
setInterval(updateClock, 1000);
