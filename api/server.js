const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;

const db = require('../data/db-config')
/**
  [GET] /api/schemes

  response:
  [
    { scheme_id: 1, scheme_name: "World Domination", number_of_steps: 3 },
    { scheme_id: 2, scheme_name: "Get Rich Quick", number_of_steps: },
  ]
 */

  async function query(){
       const query = await db('schemes')
       console.log(query)
  }
  query()



