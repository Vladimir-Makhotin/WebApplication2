export class Message {
    MessageId: number;
    MessageContent: string;
    rf_UserId: number;
    rf_ThemeId: number;

    constructor(id: number, content: string, userid: number, themeid: number) {
        this.MessageContent = content;
        this.MessageId = id;
        this.rf_UserId = userid;
        this.rf_ThemeId = themeid;
    }
}