AngularJS - NodeJS ES6 boilerplate
==================================

This sample is a quick way to start an api in NodeJS with an AngularJs frontend skeleton.

## Table of Contents
  - [Table of Contents](#table-of-contents)
  - [Project architecture](#project-architecture)
  - [Docker / docker-compose version](#docker--docker-compose-version)
  - [Getting Started](#getting-started)
  - [Scripts](#scripts)
  - [Infos](#infos)

## Project architecture

```
/api
/controllers
/models
/modules
/routes
/test/*.spec.js
server.js
```
* `/api` OpenAPI spec
* `/controllers` Routes implementation
* `/models` MongoDb models
* `/modules` Lib
* `/routes` Routes declaration
* `/test` Unit test with chai/mocha 

## Getting Started

```bash
# Clone it
git clone git@github.com:bogardt/angularjs-node-es6.git
cd angularjs-node-es6

# Download front end dependencies
bower install

# Build front end sources
grunt buid

# If you want a livereload to dev some front
grunt live

# Start project
npm start

# Run test
npm test
```

## Infos

You can also use the OpenAPI (swagger documentation) reachable on http://localhost:4000/docs