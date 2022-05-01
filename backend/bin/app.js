"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const server_1 = require("./server/server");
const express = require("express");
let server = new server_1.Server({ app: express(), port: config_1.Config.Port });
server.Run();
//# sourceMappingURL=app.js.map