const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://dbmasteruser:elche2001@ls-b9094ba1909034145e638aa281f2e800ea46bb87.crhdazdvr78m.eu-west-2.rds.amazonaws.com:5432/apparel-db',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('CREATE TABLE IF NOT EXISTS test_table (id SERIAL PRIMARY KEY, name VARCHAR(255))', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connection successful, Server time:', res.rows[0]);
  client.end();
});
