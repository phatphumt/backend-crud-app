const express = require('express');

const appRouterV2 = express.Router();

appRouterV2.get('/', (req, res) => {
	res.json([{ hello: 'hello world' }]);
});

module.exports = appRouterV2;
