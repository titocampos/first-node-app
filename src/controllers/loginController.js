const loginModel = require('../models/loginModel')
const { log } = require('../util/loggerTool')
const path = require('path');

const loginController = {
  login: async (request, response) => {
    try {
        if (!request.session.loggedin) {
            return response.status(200).render('login');
        }
        else
          response.redirect('/checkout');
    } catch(error) {
      log("loginController", "error", `Error message ${error}`)
      return response.status(500).send({ message: error })
    }
  },

  auth: async (request, response) => {
    try {
      const username = request.body.username;
    	const  password = request.body.password;

      if (username && password) {
        const login = await loginModel.authOn(username, password)
        if(login.hasOwnProperty('error')) {
          response.redirect("/");
        }
        else{
          request.session.loggedin = true;
  				request.session.username = username;
          response.redirect('/checkout');
        }
        response.end();
      }
      else{
        response.send('Please enter Username and Password!');
    		response.end();
      }
    } catch(error) {
      log("loginController", "error", `Error message ${error}`)
      return response.status(400).send({ message: error })
    }
  }
}

module.exports = loginController
