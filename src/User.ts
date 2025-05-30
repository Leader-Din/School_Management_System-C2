export abstract class User {
    constructor (
        private userId : number,
        private firstName : string,
        private lastName : string,
        private email : string,
        private password : string,
        private phone : string
    ) {}

    public register(firstName: string, lastName: string, email: string, password: string, phone: string): void {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    public login(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            console.log("Login successful");
            return true;
        } else {
            console.log("Login failed");
            return false;
        }
    }

    public logout(): void {
        console.log("User logged out");
    }
}
