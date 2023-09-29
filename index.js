const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const dotenv = require('dotenv');
const appRouter = require('./routes/api');
const appRouterV2 = require('./routes/apiv2');

const app = express();
dotenv.config();

const corsO = {
	origin: '*',

	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],

	allowedHeaders: ['Content-Type'],
};

const listen = (port) => {
	app.listen(port, () => {
		console.log(`server running on http://localhost:${port}`);
	});
};

const dbURI =
	process.env.dbURI ||
	'mongodb+srv://phumfirebase:mJSkXNrwUsvPVYh0@testmongo.mo01x7i.mongodb.net/testingnodeode?retryWrites=true&w=majority'; // pls dont steal this

connect(dbURI)
	.then(() => {
		console.log('mongo connected');
		listen(process.env.PORT || 4000);
	})
	.catch((err) => console.log(err));

app.use(cors(corsO));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', appRouter);
app.use('/apiv2', appRouterV2);

module.exports = app;
