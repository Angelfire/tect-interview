class SimpleEventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(...args));
    }
  }

  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (cb) => cb !== callback,
      );
    }
  }
}

function createSimpleEventEmitter() {
  const listeners = {};

  function on(event, callback) {
    if (!listeners[event]) {
      listeners[event] = [];
    }
    listeners[event].push(callback);
  }

  function emit(event, ...args) {
    if (listeners[event]) {
      listeners[event].forEach((callback) => callback(...args));
    }
  }

  function off(event, callback) {
    if (listeners[event]) {
      if (callback) {
        listeners[event] = listeners[event].filter((cb) => cb !== callback);
      } else {
        delete listeners[event];
      }
    }
  }

  return { on, emit, off };
}

const emitter = new SimpleEventEmitter();

emitter.on("greet", (name) => console.log(`Hello, ${name}!`));
emitter.emit("greet", "John"); // Hello, John!
emitter.off("greet");
