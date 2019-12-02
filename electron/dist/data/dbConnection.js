"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConnection {
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
exports.default = DbConnection;
//# sourceMappingURL=dbConnection.js.map