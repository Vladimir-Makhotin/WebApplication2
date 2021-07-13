import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './Message';
import { Theme } from './Theme';
import { User } from './User';

@Injectable()
export class DataService {
    private urlUser = "/api/user";
    private urlTheme = "/api/theme";
    private urlMessage = "/api/message";
    constructor(private http: HttpClient) {}
    getUser() {
        return this.http.get(this.urlUser);
    }
    getOneUser(id: number) {
        return this.http.get(this.urlUser + '/' + id);
    }
    createUser(user: User) {
        return this.http.post(this.urlUser, user);
    }
    updateUser(user: User) {
        return this.http.put(this.urlUser, user);
    }
    deleteUser(id: number) {
        return this.http.delete(this.urlUser + '/' + id);
    }
    getTheme() {
        return this.http.get(this.urlTheme);
    }
    getOneTheme(id: number) {
        return this.http.get(this.urlTheme + '/' + id);
    }
    createTheme(theme: Theme) {
        return this.http.post(this.urlTheme, theme);
    }
    updateTheme(theme: Theme) {
        return this.http.put(this.urlTheme, theme);
    }
    deleteTheme(id: number) {
        return this.http.delete(this.urlTheme + '/' + id);
    }
    getMessage() {
        return this.http.get(this.urlMessage);
    }
    createMessage(message: Message, userid: number, themeid: number) {
        return this.http.post(this.urlMessage + '/userid/' + userid + '/themeid/' + themeid, message);
    }
    updateMessage(message: Message, userid: number, themeid: number) {
        return this.http.put(this.urlMessage + '/userid/' + userid + '/themeid/' + themeid, message);
    }
    deleteMessage(id: number) {
        return this.http.delete(this.urlMessage + '/' + id);
    }
}