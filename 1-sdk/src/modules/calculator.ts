import { Client } from '../core/client';

export class Calculator {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  add(a: number, b: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return a + b;
  }

  subtract(a: number, b: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return a - b;
  }

  multiply(a: number, b: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return a * b;
  }

  divide(a: number, b: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }

  power(base: number, exponent: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return Math.pow(base, exponent);
  }
}
