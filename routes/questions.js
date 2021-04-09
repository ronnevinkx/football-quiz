const router = require('express').Router();
let Question = require('../models/question.model');

// get all items, sort randomly
router.route('/').get(async (req, res) => {
	let { amount, difficulty, type } = req.query;
	amount = amount ? parseInt(amount) : null;
	difficulty = difficulty ? difficulty : 'easy';
	type = type ? type : 'multiple';

	try {
		const data = await Question.find({ difficulty, type })
			.select('-_id -__v -createdAt -updatedAt')
			.limit(amount);
		return res.json({
			count: data.length,
			results: data.sort(() => Math.random() - 0.5)
		});
	} catch (error) {
		return res.status(400).json('Error: ' + error);
	}
});

// get specific item
router.route('/:id').get(async (req, res) => {
	try {
		const data = await Question.findById(req.params.id).select('-_id -__v');
		return res.json(data);
	} catch (error) {
		return res.status(400).json('Error: ' + error);
	}
});

// create item
router.route('/add').post(async (req, res) => {
	const {
		category,
		type,
		difficulty,
		question,
		incorrect_answers,
		correct_answer
	} = req.body;

	const newQuestion = new Question({
		category,
		type,
		difficulty,
		question,
		incorrect_answers,
		correct_answer
	});

	try {
		const data = await newQuestion.save();
		return res.json(data._id);
	} catch (error) {
		return res.status(400).json('Error: ' + error);
	}
});

// delete item
router.route('/delete/:id').delete(async (req, res) => {
	try {
		const data = await Question.findByIdAndDelete(req.params.id);
		return res.json('Question deleted');
	} catch (error) {
		return res.status(400).json('Error: ' + error);
	}
});

module.exports = router;
