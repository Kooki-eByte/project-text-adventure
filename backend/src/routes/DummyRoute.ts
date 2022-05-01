import express = require('express');

export class Home {
    // Home Route
    public static Index(_: express.Request, response: express.Response) {
        response.send("Ok");
    }
}