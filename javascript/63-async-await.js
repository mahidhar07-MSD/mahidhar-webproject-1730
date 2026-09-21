async function greet() {
  return 'Hello from async/await';
}

greet().then((msg) => console.log(msg));
