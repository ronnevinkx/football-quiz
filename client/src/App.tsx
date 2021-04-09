import { useState } from 'react';
import { fetchQuizQuestions } from './utils';
import { SITE_TITLE, TOTAL_QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import { Difficulty, QuestionState, AnswerObject } from './types';
import { GlobalStyle, Wrapper } from './App.styles';

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [number, setNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	// console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
	// console.log(questions);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		try {
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.EASY
			);

			setQuestions(newQuestions);
			setUserAnswers([]);
			setNumber(0);
			setScore(0);
			setLoading(false);
		} catch (error) {
			console.log('Error', error);
		}
	};

	const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[number].correct_answer === answer;

			if (correct) setScore((prev) => prev + 1);

			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			};

			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>{SITE_TITLE}</h1>
				{!gameOver && <p className="score">Score: {score}</p>}
				{loading && <p>Loading questions...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNmbr={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={
							userAnswers ? userAnswers[number] : undefined
						}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
					!loading &&
					userAnswers.length === number + 1 &&
					number !== TOTAL_QUESTIONS - 1 && (
						<button className="next" onClick={nextQuestion}>
							Next Question
						</button>
					)}
				{(gameOver || userAnswers.length === TOTAL_QUESTIONS) &&
					!loading && (
						<button
							className={`start ${
								userAnswers.length === TOTAL_QUESTIONS
									? `mt-20`
									: ``
							}`}
							onClick={startTrivia}
						>
							{userAnswers.length === TOTAL_QUESTIONS
								? 'Restart'
								: 'Start'}
						</button>
					)}
			</Wrapper>
		</>
	);
}

export default App;
