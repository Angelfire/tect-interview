# Event Emitter

SimpleEventEmitter - A basic implementation of the event emitter pattern.

An event emitter is a design pattern and a core concept in Node.js that allows objects to emit named events that can be listened to and handled by other parts of your application.
It's a way to implement the observer pattern, enabling loose coupling between components.

## How to use it

```js
// Usage examples
const emitter = new SimpleEventEmitter();

// 1. Basic event listening and emitting
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "Alice");

// 2. One-time event listener
emitter.once("oneTimeEvent", (data) => {
  console.log(`One-time event received: ${data}`);
});

emitter.emit("oneTimeEvent", "Important data");
emitter.emit("oneTimeEvent", "This won't be logged"); // No output

// 3. Removing a specific listener
const notifyCallback = (message) => {
  console.log(`Notification: ${message}`);
};

emitter.on("notify", notifyCallback);
emitter.emit("notify", "First notification");

emitter.off("notify", notifyCallback);
emitter.emit("notify", "This won't be logged"); // No output

// 4. Removing all listeners for an event
emitter.on("clear", () => console.log("Listener 1"));
emitter.on("clear", () => console.log("Listener 2"));

console.log(`Listeners before clear: ${emitter.listenerCount("clear")}`);
emitter.removeAllListeners("clear");
console.log(`Listeners after clear: ${emitter.listenerCount("clear")}`);

// 5. Getting listener count
emitter.on("count", () => {});
emitter.on("count", () => {});
emitter.once("count", () => {});

// 6. Remove another occurrence of listener1
emitter.removeOneListener("testEvent", listener1);

console.log(`'count' event listeners: ${emitter.listenerCount("count")}`);
```
