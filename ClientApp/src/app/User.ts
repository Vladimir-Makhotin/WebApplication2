export class User {
    UserId: number;
    UserName: string;
    UserPhone: number;
    UserEmail: string;

    constructor(id: number, name: string, phone: number, email: string) {
        this.UserId = id;
        this.UserName = name;
        this.UserPhone = phone;
        this.UserEmail = email;
    }
}