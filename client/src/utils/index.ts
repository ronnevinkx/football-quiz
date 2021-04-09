import { Difficulty, Question } from '../types';

export const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endpoint = `http://localhost:5000/api/questions/?amount=${amount}&difficulty=${difficulty}&type=multiple`;
	// const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
	const data = await (await fetch(endpoint)).json();

	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer
		])
	}));
};
