import { Component } from '@angular/core';
export class user {
    username: string;
    userphone: number;
    useremail: string;
    constructor(name: string, phone: number, email: string) {
        this.username = name;
        this.userphone = phone;
        this.useremail = email;
    }
}
export class Theme {
    themename: string;
    constructor(theme: string) {
        this.themename = theme;
    }
}
export class Message {
    messagecontent: string;
    constructor(content: string) {
        this.messagecontent = content;
    }
}
@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    textname: string;
    textemail: string;
    numberphone: number;
    users: user[] =
        [
            { username: "ivan", userphone: 89998887766, useremail: "ivan@mail.ru" },
            { username: "sergey", userphone: 89098087060, useremail: "sergey@mail.ru" }
        ];
    themes: Theme[];
    messages: Message[];
    addUser(textname: string, numberphone: number, textemail: string): void {
        console.log('sucsses');
        if (textname == null || textname == "" || numberphone == null || textemail == null)
            return;
        this.users.push(new user(textname, numberphone, textemail));
        console.log(this.users);
    }
    /*addUser(user: user) {
        console.log("sucsses");
        if (user.username == null || user.username == "" || user.useremail == null || user.useremail == "" || user.userphone == null)
            return;
        this.users.push(user);
    }*/
}