/**
 * Logs every request from the backend
 * TODO: MAKE A LOG SYSTEM FOR WHEN A REPO/SERVICE/CONTROLLER GETS CALLED
 */

import express = require('express');

export class Logger {
  public static LogRequest(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(new Date, request.method, request.url, response.status);
    next();
  }
}