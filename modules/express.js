import express from 'express';
import bodyParser from 'body-parser';
import swaggerTools from 'swagger-tools';
import cors from 'cors';
import morgan from 'morgan';
import test from '../routes/test';

const swaggerDoc = require('../api/swagger.json');

export default app => {
  /**
   * swaggerRouter configuration
   */
  const options = {
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'dev'
  };

  /**
   *  Initialize the Swagger middleware
   */
  swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
    /**
     *  Interpret Swagger resources and attach metadata to request
     *  must be first in swagger-tools middleware chain
     */
    app.use(middleware.swaggerMetadata());

    /**
     *  Validate Swagger requests
     */
    app.use(middleware.swaggerValidator());

    /**
     *  Route validated requests to appropriate controller
     */
    app.use(middleware.swaggerRouter(options));

    /**
     *  Serve the Swagger documents and Swagger UI
     */
    app.use(middleware.swaggerUi());

    /**
     * Configuration of differents used middlewares in app
     */
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.static(`${__dirname}/../public`));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

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
  });
};
