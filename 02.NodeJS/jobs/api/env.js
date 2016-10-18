'use strict';

// will contain all the configurations

const env = {};

env.server = {
  port: process.env.SERVER_PORT || 4000
}

env.database = {
  uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/jobs-db',
  credentials: {
    user: process.env.DATABASE_USER || '',
    pass: process.env.DATABASE_PASS || ''
  }
}

module.exports = env;