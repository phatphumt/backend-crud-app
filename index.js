const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const dotenv = require('dotenv');
const appRouter = require('./routes/api');

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

const dbURI = process.env.dbURI;

connect(dbURI)
	.then((res) => {
		console.clear();
		console.log('mongo connected');
		listen(process.env.PORT);
	})
	.catch((err) => console.log(err));

app.use(cors(corsO));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', appRouter);
