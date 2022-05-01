"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const StatusCode_1 = require("./../routes/StatusCode");
const DummyRoute_1 = require("./../routes/DummyRoute");
const Logger_1 = require("./../middleware/Logger");
class Server {
    constructor(express) {
        this._App = express.app;
        this._Port = express.port;
        this.ConfigureMiddleware(this._App);
        this.ConfigureRoutes(this._App);
    }
    ConfigureMiddleware(app) {
        app.use(Logger_1.Logger.LogRequest);
    }
    ConfigureRoutes(app) {
        app.get('/', DummyRoute_1.Home.Index);
        app.get('/500', StatusCode_1.StatusCode.ServerError);
        app.get('/*', StatusCode_1.StatusCode.NotFound);
    }
    Run() {
        this._App.listen(this._Port, () => {
            console.log(`Server running on port : ${this._Port}.`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map