# First node app

### Requirements

Node version 10.15.0 or better

[NodeJS](https://nodejs.org)

Create an account in Stripe

[Stripe](https://stripe.com/)

## Installation

Clone or download example, install the dependencies using:
```
npm install
```

Using file */src/config/api_example.js*, create a new file */src/config/api.js* with your Stripe credentials
```
module.exports = {
  stripe: {
    STRIPE_KEY: 'YOUR SECRET KEY HERE'
  }
}
```

## Running

To run use *npm* or *nodemon*
```
npm run dev
```

To change port that application is listening to, access file */src/config/general.js*, and modify value of *serverPort*
```
module.exports = {
  serverPort: 3500,
  logdir: "log"
}
```

## Using

From your browser access the URL below
```
http://localhost:3500/
```

## Useful links

[Utilizando NPM para instalação de pacotes](https://medium.com/tableless/criando-o-meu-novo-site-4-utilizando-npm-para-instala%C3%A7%C3%A3o-de-pacotes-6c7cea2ab4b3)
[Basic Login System with Node.js, Express, and MySQL](https://codeshack.io/basic-login-system-nodejs-express-mysql/)
[Node.js SQLite Tutorial — Connection & CRUD](https://www.techiediaries.com/node-sqlite-crud/)
[Connecting To SQLite Database Using Node.js](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)
[How To Set Up Stripe Buy Buttons on Your WordPress Website](https://www.youtube.com/watch?v=OAuf4jpGe5s)
[A SQLite Tutorial with Node.js/](https://stackabuse.com/a-sqlite-tutorial-with-node-js/)
[Build a REST API with Node.js and Express.js](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
[CRIANDO UM CURRÍCULO COM NODE.JS, EXPRESS E TEMPLATES EJS](https://woliveiras.com.br/posts/criando-um-curr%C3%ADculo-com-node-js-express-e-templates-ejs)
