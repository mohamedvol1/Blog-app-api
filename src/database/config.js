
require('dotenv').config();
const pgp = require('pg-promise')();

const DEV_CONFIG = {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD
};

const PRO_CONFIG = {
	connectionString: process.env.DATABASE_URL, // heroku database string
	ssl: { rejectUnauthorized: false }
};

const db = pgp(process.env.NODE_ENV === 'production' ? PRO_CONFIG : DEV_CONFIG);

module.exports = db;
