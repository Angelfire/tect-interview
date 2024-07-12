import { Client } from '../core/client';

export class Converter {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  celsiusToFahrenheit(celsius: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return (celsius * 9/5) + 32;
  }

  fahrenheitToCelsius(fahrenheit: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return (fahrenheit - 32) * 5/9;
  }

  kilometersToMiles(kilometers: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return kilometers * 0.621371;
  }

  milesToKilometers(miles: number): number {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    return miles / 0.621371;
  }
}
