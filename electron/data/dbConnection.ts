export default class DbConnection {
    constructor() { }

    getConnection() {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db'
        });
        
        return connection;
    }
}