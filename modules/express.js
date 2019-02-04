import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import test from '../routes/test';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../api/swagger.json');

export default app => {
  /**
   * Configuration of differents middlewares
   */
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.static(`${__dirname}/../public`));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  /**
   * Declaring api entities here
   */
  app.use('/api/auth', test);

  /**
   * Redirect on current page and delete '#' angular tag
   */
  app.all('*', (req, res) => {
    const url = `${req.protocol}://${req.get('host')}/#!${req.originalUrl}`;
    console.log(`url: ${url}`);
    res.redirect(url);
  });
};
