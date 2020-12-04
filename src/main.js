class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.all.push(this);
  }
}
