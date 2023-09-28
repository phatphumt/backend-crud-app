const { Schema, model } = require('mongoose');

const thisSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const ThisStuff = model('Stuff', thisSchema);

module.exports = ThisStuff;
