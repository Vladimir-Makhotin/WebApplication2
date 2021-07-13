"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(id, content, userid, themeid) {
        this.MessageContent = content;
        this.MessageId = id;
        this.rf_UserId = userid;
        this.rf_ThemeId = themeid;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map