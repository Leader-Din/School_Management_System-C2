// User.ts
export abstract class User {
  constructor(
    protected readonly userId: number,
    protected firstName: string,
    protected lastName: string,
    protected email: string,
    protected password: string,
    protected phone: string
  ) {}

  public register(
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    phone?: string
  ): void {
    if (firstName) this.firstName = firstName;
    if (lastName) this.lastName = lastName;
    if (email) this.email = email;
    if (password) this.password = password;
    if (phone) this.phone = phone;
    console.log(`User ${this.getFullName()} registered successfully.`);
  }

  public login(email: string, password: string): boolean {
    if (this.email === email && this.password === password) {
      console.log(`User ${this.getFullName()} logged in successfully.`);
      return true;
    } else {
      console.log("Login failed: Invalid credentials.");
      return false;
    }
  }

  public logout(): void {
    console.log(`User ${this.getFullName()} logged out.`);
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getUserId(): number {
    return this.userId;
  }

  public toJSON(): object {
    return {
      userId: this.userId,
      fullName: this.getFullName(),
      email: this.email,
      phone: this.phone,
    };
  }
}