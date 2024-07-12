import { Client } from './core/client';
import { Calculator } from './modules/calculator';
import { Converter } from './modules/converter';
import { Greeter } from './modules/greeter';
import { Validator } from './modules/validator';

export class SDK {
  private client: Client;
  calculator: Calculator;
  greeter: Greeter;
  converter: Converter;
  validator: Validator;

  constructor(apiKey: string) {
    this.client = new Client(apiKey);
    this.calculator = new Calculator(this.client);
    this.greeter = new Greeter(this.client);
    this.converter = new Converter(this.client);
    this.validator = new Validator(this.client);
  }
}

export default SDK;
