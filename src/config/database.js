const mysql = require('mysql2');

// Conexión pool para obtener un mejor rendimiento
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// Obtener una instancia envuelta en Promise
const promisePool = pool.promise();

// Obtener conexión
promisePool.getConnection((err, connection) => {
	if (err) throw err;

	if (connection) connection.release();
	console.log('Server conectado a la DB');
});

module.exports = { promisePool, mysql };
