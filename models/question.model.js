const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: [true, 'Please add a category'],
			trim: true,
			maxlength: [40, 'The category cannot be longer than 40 characters']
		},
		type: {
			type: String,
			enum: ['multiple', 'boolean'],
			default: 'multiple',
			required: true
		},
		difficulty: {
			type: String,
			enum: ['easy', 'medium', 'hard'],
			default: 'easy',
			required: true
		},
		question: {
			type: String,
			required: true,
			maxlength: [
				200,
				'The question cannot be longer than 200 characters'
			]
		},
		incorrect_answers: [
			{
				type: String,
				required: true
			}
		],
		correct_answer: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports =
	mongoose.models.Question || mongoose.model('Question', questionSchema);
