const sqlite3 = require('sqlite3')
const Promise = require('bluebird')
const { log } = require('../util/loggerTool')

class database {
  constructor(dbFilePath) {
    const { log } = require('../util/loggerTool')
    this.db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
      if (err) {
        log("database", "error", `Error message ${err}`)
      } else {
        console.log('Connected to database')
        this.createDatabase()
      }
    })
  }

  createDatabase() {
    console.log("Creating database table users");
    this.db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT)");
    this.insertData();
  }

  insertData(){
    this.db.all("SELECT 1 FROM users WHERE id = ?", [1], (err, row) =>{
      if (!row || (row.length == 0) ){
        console.log("Inserting initial data");
        this.db.run('INSERT INTO users (login, password) VALUES (?, ?)', ["user@user.com.br", "123"]);
      }
    })

    this.db.all("SELECT id, login FROM users", function(err, rows) {
      rows.forEach(function (row) {
        console.log(row.id + ": " + row.login);
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          log("database", "error", `Error running sql ${sql}`)
          log("database", "error", `Error message ${err}`)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          log("database", "error", `Error running sql ${sql}`)
          log("database", "error", `Error message ${err}`)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          log("database", "error", `Error running sql ${sql}`)
          log("database", "error", `Error message ${err}`)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

}

module.exports = database
