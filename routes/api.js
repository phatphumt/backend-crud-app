const express = require('express');
const ThisStuff = require('../models/schemas');

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
	console.log(req.method, req.path);
	res.json([{ this: 'that', notThis: 'notThat' }]);
});

appRouter.post('/post', (req, res) => {
	console.log(req.body);
	const dt = new ThisStuff(req.body);

	dt.save()
		.then((r) => {
			console.log(r);
			res.send(r);
		})
		.catch((e) => res.json({ error: `${e}` }));
});

appRouter.get('/all-stuff', (rq, rs) => {
	ThisStuff.find()
		.then((r) => {
			rs.send(r);
		})
		.catch((e) => res.json({ error: `${e}` }));
});

appRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	ThisStuff.findByIdAndRemove(id)
		.then((r) => res.send(r))
		.catch((e) => res.json({ error: `${e}` }));
});

appRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	// console.log(id, req.body);
	ThisStuff.findByIdAndUpdate(id, req.body)
		.then((r) => {
			res.send(r);
			console.log(r);
		})
		.catch((e) => res.json({ error: `${e}` }));
});

module.exports = appRouter;
