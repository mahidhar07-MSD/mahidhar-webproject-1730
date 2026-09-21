// 3. Create a stopwatch.
let seconds = 0;
const timer = setInterval(() => {
  seconds += 1;
  console.log(`Elapsed: ${seconds}s`);
}, 1000);

setTimeout(() => clearInterval(timer), 10000);
