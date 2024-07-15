# JS Core Concepts

## Table of Contents

- 1. Loops

  - 1.1. for Loop
    ```js
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```
  - 1.2. while Loop
    ```js
    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }
    ```
  - 1.3. do...while Loop
    ```js
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 5);
    ```
  - 1.4. for...in Loop (Object properties)
    ```js
    const obj = { a: 1, b: 2, c: 3 };
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
    ```
  - 1.5. for..of Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    for (let item of arr) {
      console.log(item);
    }
    ```
  - 1.6. forEach Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    arr.forEach((item) => console.log(item));
    ```
  - 1.7. map Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const doubled = arr.map((item) => item * 2);
    ```
  - 1.8. filter Loop (Array elements)
    ```js
    const arr = [1, 2, 3, 4];
    const evens = arr.filter((item) => item % 2 === 0);
    ```
  - 1.9. reduce Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    ```
  - 1.10. some Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const hasEven = arr.some((item) => item % 2 === 0);
    ```
  - 1.11. every Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const allPositive = arr.every((item) => item > 0);
    ```
  - 1.12. find Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const found = arr.find((item) => item > 1);
    ```
  - 1.13. findIndex Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const index = arr.findIndex((item) => item > 1);
    ```
  - 1.14. indexOf Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const index = arr.indexOf(2);
    ```
  - 1.15. lastIndexOf Loop (Array elements)
    ```js
    const arr = [1, 2, 2, 3];
    const lastIndex = arr.lastIndexOf(2);
    ```
  - 1.16. includes Loop (Array elements)
    ```js
    const arr = [1, 2, 3];
    const includes = arr.includes(2);
    ```

- 2. Language type: JavaScript is multi-paradigm, supporting:

  - 2.1. object-oriented
  - 2.2. imperative
  - 2.3. functional programming

- 3. Design Patterns

  - 3.1 OOP
    - 3.1.1 Creational (singleton)
      ```js
      class Singleton {
        static instance;
        constructor() {
          if (Singleton.instance) return Singleton.instance;
          Singleton.instance = this;
        }
      }
      ```
    - 3.1.2 Structural (adapter)
      ```js
      class OldAPI {
        oldMethod() {}
      }
      class NewAPI {
        newMethod() {}
      }
      class Adapter extends NewAPI {
        oldMethod() {
          this.newMethod();
        }
      }
      ```
    - 3.1.3 Behavioral (observer)
      ```js
      class Subject {
        observers = [];
        notify() {
          this.observers.forEach((o) => o.update());
        }
      }
      ```
  - 3.2. Functional
    - 3.2.1 Closure
      ```js
      function outer() {
        let x = 10;
        return function inner() {
          console.log(x);
        };
      }
      ```
    - 3.2.2 Currying
      ```js
      const add = (a) => (b) => a + b;
      ```
    - 3.2.3 Function Composition
      ```js
      const compose = (f, g) => (x) => f(g(x));
      ```
    - 3.2.4 Memoization
      ```js
      function memoize(fn) {
        const cache = {};
        return (...args) => {
          const key = JSON.stringify(args);
          return cache[key] || (cache[key] = fn(...args));
        };
      }
      ```
    - 3.2.5 Partial Application
      ```js
      const partial =
        (fn, ...args) =>
        (...moreArgs) =>
          fn(...args, ...moreArgs);
      ```
    - 3.2.6 Recursion
      ```js
      function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
      }
      ```
    - 3.2.7 Throttling
      ```js
      function throttle(fn, delay) {
        let lastCall = 0;
        return function (...args) {
          const now = Date.now();
          if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
          }
        };
      }
      ```
    - 3.2.8 Debouncing
      ```js
      function debounce(fn, delay) {
        let timeoutId;
        return function (...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }
      ```

- 4. Debugging and troubleshooting tools:

  - 4.1. console.log()
  - 4.2. debugger
  - 4.3. DevTools
  - 4.4. Linters (ESLint, Biome)

- 5. Strong typing (JavaScript is dynamically typed)

  - 5.1. TypeScript
  - 5.2. Flow

- 6. Inheritance

  - 6.1. Prototypal inheritance (default in JS)

    ```js
    // Constructor function
    function Animal(name) {
      this.name = name;
    }

    // Adding a method to the prototype
    Animal.prototype.speak = function () {
      console.log(this.name + " makes a sound.");
    };

    // Creating a new object
    let dog = new Animal("Dog");
    dog.speak(); // Outputs: "Dog makes a sound."

    // Creating a "subclass"
    function Dog(name) {
      Animal.call(this, name); // Call the parent constructor
    }

    // Set up the prototype chain
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    // Override the speak method
    Dog.prototype.speak = function () {
      console.log(this.name + " barks.");
    };

    let rover = new Dog("Rover");
    rover.speak(); // Outputs: "Rover barks."
    ```

  - 6.2. Class-based inheritance (ES6+ syntax sugar)

    ```js
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + " makes a sound.");
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name); // Call the parent constructor
      }

      speak() {
        console.log(this.name + " barks.");
      }
    }

    let animal = new Animal("Generic Animal");
    animal.speak(); // Outputs: "Generic Animal makes a sound."

    let dog = new Dog("Buddy");
    dog.speak(); // Outputs: "Buddy barks."
    ```
