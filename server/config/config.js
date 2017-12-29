'use strict';

const config = {
  webServer: {
    port: process.env.PORT || '8080'
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/flash-cards'
  }
};

module.exports = config;
