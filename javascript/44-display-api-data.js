fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((user) => {
    document.body.innerHTML = `<h2>${user.name}</h2><p>${user.email}</p>`;
  });
