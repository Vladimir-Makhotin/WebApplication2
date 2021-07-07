import {Component} from '@angular/core';
import {User} from "./User";
import {Theme} from "./Theme";
import {Message} from "./Message";

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    nameInputString: string;
    emailInputString: string;
    phoneInputString: number;
    users: User[] =
        [
            {name: "ivan", phone: 89998887766, email: "ivan@mail.ru"},
            {name: "sergey", phone: 89098087060, email: "sergey@mail.ru"}
        ];
    themes: Theme[];
    messages: Message[];

    addUser(textname: string, numberphone: number, textemail: string): void {
        console.log(textname, numberphone, textemail);
        if (textname == null || textname == "" || numberphone == null || textemail == null) {
            return;
        }
        this.users.push(new User(textname, numberphone, textemail));
    }
    /*addUser(user: user) {
        console.log("sucsses");
        if (user.username == null || user.username == "" || user.useremail == null || user.useremail == "" || user.userphone == null)
            return;
        this.users.push(user);
    }*/
}
