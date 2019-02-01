const config = {};
config.serverPort = process.env.serverPort || 3000;
config.nodeEnv = process.env.NODE_ENV || 'dev';
export default config;
