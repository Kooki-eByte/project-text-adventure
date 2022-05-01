/**
 * Handle Not Found and ServerErrors since we are building up our own sort of "database"
 */
import express = require('express');

export class StatusCode {
    // 404
    public static NotFound(_: express.Request, response: express.Response) {
        response.status(404).send('Not Found');
    }
    // 500
    public static ServerError(_: express.Request, response: express.Response) {
        response.status(500).send('Server Error');
    }
}