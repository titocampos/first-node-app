const { log } = require('../util/loggerTool')
const database = require('../util/dao')

const loginModel = {

  authOn: async(username, password) => {
    try {
      //const express = require('express');
      //const session = require('express-session');
      //const bodyParser = require('body-parser');
      //const path = require('path');
      const dao = new database("./db/mydb.db")
      const result = await dao.get("SELECT * FROM users WHERE login = ? and password = ?", [username, password])

      if (result){
        return {res: "OK"}
      }
      return {error: "error"}
    } catch (error) {
      log("loginModel", "error", `Error message ${error.message}`)
      return { error: error.message }
    }
  }
}

module.exports = loginModel
