/**
 * SimpleEventEmitter - A basic implementation of the event emitter pattern.
 */
class SimpleEventEmitter {
  /**
   * Create a new SimpleEventEmitter instance.
   */
  constructor() {
    this.listeners = {};
    this.onceListeners = {};
  }

  /**
   * Add a listener for a given event.
   * @param {string} event - The event name.
   * @param {Function} callback - The callback function to execute when the event is emitted.
   */
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  /**
   * Add a one-time listener for a given event.
   * @param {string} event - The event name.
   * @param {Function} callback - The callback function to execute once when the event is emitted.
   */
  once(event, callback) {
    if (!this.onceListeners[event]) {
      this.onceListeners[event] = [];
    }
    this.onceListeners[event].push(callback);
  }

  /**
   * Remove a listener for a given event.
   * @param {string} event - The event name.
   * @param {Function} callback - The callback function to remove.
   */
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
    if (this.onceListeners[event]) {
      this.onceListeners[event] = this.onceListeners[event].filter(cb => cb !== callback);
    }
  }

  /**
   * Emit an event with the given name and arguments.
   * @param {string} event - The event name to emit.
   * @param {...any} args - Arguments to pass to the event listeners.
   */
  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(...args));
    }
    
    if (this.onceListeners[event]) {
      this.onceListeners[event].forEach(callback => callback(...args));
      delete this.onceListeners[event];
    }
  }

  /**
   * Remove all listeners for a given event.
   * @param {string} event - The event name to clear listeners for.
   */
  removeAllListeners(event) {
    delete this.listeners[event];
    delete this.onceListeners[event];
  }

  /**
   * Get the number of listeners for a given event.
   * @param {string} event - The event name.
   * @returns {number} The number of listeners for the event.
   */
  listenerCount(event) {
    return (this.listeners[event] ? this.listeners[event].length : 0) +
           (this.onceListeners[event] ? this.onceListeners[event].length : 0);
  }
  
    /**
   * Remove the first occurrence of a listener for a given event.
   * @param {string} event - The event name.
   * @param {Function} callback - The callback function to remove.
   * @returns {boolean} True if a listener was removed, false otherwise.
   */
  removeOneListener(event, callback) {
    if (this.listeners[event]) {
      const index = this.listeners[event].indexOf(callback);
      if (index !== -1) {
        this.listeners[event].splice(index, 1);
        return true;
      }
    }
    if (this.onceListeners[event]) {
      const index = this.onceListeners[event].indexOf(callback);
      if (index !== -1) {
        this.onceListeners[event].splice(index, 1);
        return true;
      }
    }
    return false;
  }
}
