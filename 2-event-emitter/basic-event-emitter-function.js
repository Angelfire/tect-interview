function SimpleEventEmitter() {
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