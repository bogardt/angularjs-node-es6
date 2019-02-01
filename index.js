import express from 'express';
import config from './config.dev';
import expressConfig from './modules/express';

class Server {
  constructor() {
    this.app = express();
    this.config = config;
    expressConfig(this.app);
    this.app.listen(this.config.serverPort);
  }
}

export default new Server().app;
