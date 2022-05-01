"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static LogRequest(request, response, next) {
        console.log(new Date, request.method, request.url, response.status);
        next();
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map