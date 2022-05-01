"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
class StatusCode {
    static NotFound(_, response) {
        response.status(404).send('Not Found');
    }
    static ServerError(_, response) {
        response.status(500).send('Server Error');
    }
}
exports.StatusCode = StatusCode;
//# sourceMappingURL=StatusCode.js.map