const path = require('path');

return {
  "development": {
    "username": "root",
    "password": null,
    "database": "controladoria_dev",
    "host": "127.0.0.1",
    "dialect": "sqlite3",
    "operatorsAliases": false,
    "storage": path.join(__dirname + "../../storage/controladoria_dev.sqlite") 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "controladoria_test",
    "host": "127.0.0.1",
    "dialect": "sqlite3",
    "operatorsAliases": false,
    "storage":path.join(__dirname + "../../storage/controladoria_test.sqlite") 
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "controladoria_production",
    "host": "127.0.0.1",
    "dialect": "sqlite3",
    "operatorsAliases": false,
    "storage": path.join(__dirname + "../../storage/controladoria_production.sqlite") 
  }
}
