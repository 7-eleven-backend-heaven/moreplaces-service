const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '3.101.34.244',
  database: 'moreplaces',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log('unsucessful connection to DB', err.stack);
  } else {
    console.log('Successful connectin to DB');
  }
});

module.exports = pool;
