import { AnswerObject } from '../types';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNmbr: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNmbr,
	totalQuestions
}) => (
	<Wrapper>
		<p className="number">
			Question {questionNmbr} / {totalQuestions}
		</p>
		<p
			className="question"
			dangerouslySetInnerHTML={{ __html: question }}
		/>
		<div className="buttons">
			{answers.map((answer) => (
				<ButtonWrapper
					key={answer}
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
				>
					<button
						disabled={!!userAnswer}
						value={answer}
						onClick={callback}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);

export default QuestionCard;
