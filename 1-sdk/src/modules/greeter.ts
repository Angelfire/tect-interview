import { Client } from '../core/client';

export class Greeter {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  greet(name: string): string {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return `Hello, ${name}!`;
  }

  farewell(name: string): string {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return `Goodbye, ${name}!`;
  }

  greetFormal(title: string, lastName: string): string {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return `Good day, ${title} ${lastName}.`;
  }
}
