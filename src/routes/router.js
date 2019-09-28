const router = require('express').Router()
const loginController = require('../controllers/loginController')
const path = require('path');
const { stripe } = require('../config/api')
const { STRIPE_KEY } = stripe

router.get('/', loginController.login)

router.post('/auth', loginController.auth)

router.get('/checkout', function(request, response) {
	if (request.session.loggedin) {
    response.render('checkout', {api_key:`${STRIPE_KEY}`});
	} else {
    response.redirect('/');
	}
});

router.get('/main', function(request, response) {
	if (request.session.loggedin) {
		const stripeToken = request.query.stripeToken;
		const  stripeTokenType = request.query.stripeTokenType;
		const  stripeEmail = request.query.stripeEmail;
    //http://127.0.0.1:3500/main?stripeToken=tok_1FNViIFCW0F0a2YttiekCtWK&stripeTokenType=card&stripeEmail=titocampos%40gmail.com
    response.render('main', {title: 'Payment Test', stripeToken: stripeToken,
		            stripeTokenType: stripeTokenType, stripeEmail: stripeEmail });
	} else {
    response.redirect('/');
	}
});

router.get('/test', (req, res) => {
  //res.status(404).send('Hello world!')
  console.log(req.headers)
  const timestp = new Date()
  res.status(200).send({
   nome: 'Test API VBA',
   tempo: timestp.toJSON()
  })
})

module.exports = router
