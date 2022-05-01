import { StatusCode } from './../routes/StatusCode';
import { Home } from './../routes/DummyRoute';
import { Logger } from './../middleware/Logger';
import { IExpressApp } from './../interfaces/IExpressApp';
import express = require('express');

export class Server {
  
  private _App: express.Application;
  private _Port: number;

  constructor(express: IExpressApp) {
    this._App = express.app;
    this._Port = express.port;

    // Configure Middleware
    this.ConfigureMiddleware(this._App);

    // Configure Routes
    this.ConfigureRoutes(this._App);
  }

  private ConfigureMiddleware(app: express.Application): void {
    app.use(Logger.LogRequest);
  }

  private ConfigureRoutes(app: express.Application): void {
    // designated routes folder will go here
    app.get('/', Home.Index);

    // When getting a 500 status code
    app.get('/500', StatusCode.ServerError);

    // When getting a 404 status code
    app.get('/*', StatusCode.NotFound);
  }

  public Run(): void {
    this._App.listen(this._Port, () => {
      console.log(`Server running on port : ${this._Port}.`);
    })
  }

}