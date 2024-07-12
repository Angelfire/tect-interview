import { Client } from '../core/client';

export class Validator {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  isEmail(email: string): boolean {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isPhoneNumber(phoneNumber: string): boolean {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  }

  isStrongPassword(password: string): boolean {
    console.log(`Using API Key: ${this.client.getApiKey()}`);
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }
}
