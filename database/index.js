const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '50.18.10.219',
  database: 'moreplaces',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log('unsucessful connection to DB', err.stack);
  } else {
    console.log('Successful connection to DB');
  }
});

module.exports = pool;
