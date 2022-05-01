import { Config } from './config';
import { Server } from './server/server';
import express = require('express');

let server = new Server({app: express(), port: Config.Port});
server.Run();