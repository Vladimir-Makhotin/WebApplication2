import { Component } from '@angular/core';
import { User } from "./User";
import { Theme } from "./Theme";
import { Message } from "./Message";
import { DataService } from "./data.service";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent {
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getUser().subscribe((data: User[]) => this.users = data);
        this.dataService.getTheme().subscribe((data: Theme[]) => this.themes = data);
        this.dataService.getMessage().subscribe((data: Message[]) => this.messages = data);
    }
    nameInputString: string;
    emailInputString: string;
    phoneInputString: number;
    themeSelectedString: string;
    contentInputString: string;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    theme: Theme;
    message: Message = { MessageId: 0, MessageContent: "null", rf_ThemeId: 0, rf_UserId: 0 };
    user: User = { UserId: 0, UserName: "null", UserPhone: 0, UserEmail: "null" };
    check: Boolean;
    userId: number;
    users: User[] = [];/*
        [
            { name: "ivan", phone: 89998887766, email: "ivan@mail.ru" },
            { name: "sergey", phone: 89098087060, email: "sergey@mail.ru" }
        ];*/
    themes: Theme[] = [];/*
        [
            { name: "Техподдержка" },
            { name: "Продажи" },
            { name: "Сотрудничество" },
            { name: "Партнеры" }
        ];*/
    messages: Message[]=[];
    addUser(textname: string, numberphone: number, textemail: string): void {
        console.log(textname, numberphone, textemail);
        this.check = false;
        if ((textname == null || textname == "" || numberphone == null || textemail == null))
            return;
        for (let user of this.users) {
            if (user.UserEmail == textemail && user.UserPhone == numberphone)
                this.check = true;
        }
        if (this.check == false) {
            this.user.UserName = textname;
            this.user.UserPhone = numberphone;
            this.user.UserEmail = textemail;
            if (this.user.UserId == 0) {
                this.dataService.createUser(this.user).subscribe((data: User) => this.users.push(data));
                console.log(this.user.UserId);
                console.log("user is added");
            }
                
        } 
    }
    findIdTheme(themename: string): number {
        for (let t of this.themes)
            if (t.ThemeName == themename)
                return t.ThemeId;
    }
    add(textname: string, textemail: string, numberphone: number, texttheme: string, textcontent: string) {
        console.log(textname, textemail, numberphone, texttheme, textcontent);
        //console.log(this.user.UserId);
        this.addUser(textname, numberphone, textemail);
        this.dataService.getUser().subscribe((data: User[]) => this.users = data);
        /*this.addMessage(textcontent);
        this.addTheme(texttheme);
        this.user.name = textname;
        this.user.email = textemail;
        this.user.phone = numberphone;*/
        for (let u of this.users)
            if (u.UserEmail == textemail && u.UserName == textname && u.UserPhone == numberphone)
                this.userId = u.UserId;
        this.message.MessageContent = textcontent;
        //this.dataService.createUser(this.user).subscribe((data: User) => this.users.push(data));*/
        if (this.message.MessageId == 0) {
            this.dataService.createMessage(this.message, this.userId, this.findIdTheme(texttheme)).subscribe((data: Message) => this.messages.push(data));
            console.log("message is added");
        }
            
    }
    /*addMessage(textcontent: string) {
        console.log(textcontent);
        this.messages.push(new Message(textcontent));
    }
    addTheme(texttheme: string) {
        console.log(texttheme);
        this.themes.push(new Theme(texttheme));
    }*/
    CheckTheme(theme: Theme) {
        this.themeSelectedString = theme.ThemeName;
    }
    /*addUser(user: user) {
        console.log("sucsses");
        if (user.username == null || user.username == "" || user.useremail == null || user.useremail == "" || user.userphone == null)
            return;
        this.users.push(user);
    }*/
}