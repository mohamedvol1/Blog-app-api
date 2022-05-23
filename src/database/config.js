const pgp = require('pg-promise')();

const DEV_CONFIG = {
	host: 'localhost',
	port: '5432',
	database: 'blogs_db',
	user: 'postgres',
	password: '0001'
};

const db = pgp(DEV_CONFIG);

module.exports = db;
