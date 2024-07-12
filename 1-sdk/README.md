# SDK

## How to use it

```ts
import SDK from "./src/index";

const sdk = new SDK("mi-clave-api-secreta");

// module Calculator
console.log(sdk.calculator.add(5, 3)); // 8
console.log(sdk.calculator.power(2, 3)); // 8

// module Greeter
console.log(sdk.greeter.greet("Alice")); // Hello, Alice!
console.log(sdk.greeter.greetFormal("Mr.", "Smith")); // Good day, Mr. Smith.

// module Converter
console.log(sdk.converter.celsiusToFahrenheit(0)); // 32
console.log(sdk.converter.kilometersToMiles(10)); // 6.21371

// module Validator
console.log(sdk.validator.isEmail("test@example.com")); // true
console.log(sdk.validator.isStrongPassword("Weak")); // false
```
