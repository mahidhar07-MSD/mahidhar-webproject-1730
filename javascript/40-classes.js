class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I am ${this.name}`;
  }
}
const p = new Person('Sam', 21);
console.log(p.greet());
