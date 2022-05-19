const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;

const db = require('../data/db-config')
/**
  [GET] /api/schemes/:id

  {
    "scheme_id": 2, "scheme_name": "Get Rich Quick",
    "steps": [
      { "step_id": 5, "step_number": 1, "instructions": "collect all the sheep in Scotland"},
      { "step_id": 4, "step_number": 2, "instructions": "profit" }
    ]
  }
 */

  async function query(){

    const query = await db
      .select('schemes.scheme_name', 'steps.*')  // columns to display
      .from('schemes')
      .leftJoin('steps', 'schemes.scheme_id' , 'steps.scheme_id' )
      .where('schemes.scheme_id', 1)
      .orderBy('schemes.scheme_id')

      const result = {
        scheme_id: query[0].scheme_id,
        scheme_name: query[0].scheme_name,
        steps:query.map(step => {
                   return {
                      step_id:step.step_id, 
                      step_number:step.step_number, 
                      instructions:step.instructions
                    } 
                  })
      }

    // const query = await db('schemes')
    console.log('////////////')
    console.log(result)
    console.log('////////////')

  }
  query()



