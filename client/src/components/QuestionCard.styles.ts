import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 20px;
	max-width: 450px;
	padding: 20px;
	text-align: center
	border: 2px solid #0085a3;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	background: #ebfeff;

	p {
		font-size: 1rem;
		line-height: 1.3;
	}

	.question {
		margin-top: 20px;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: 0.3s all ease;

	:hover {
		opacity: 0.8;
	}

	button {
		font-size: 0.8rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		color: #ffffff;
		cursor: pointer;
		user-select: none;
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
		border: 3px solid #ffffff;
		border-radius: 10px;
		box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
		background: ${({ correct, userClicked }) =>
			correct
				? 'linear-gradient(90deg, #56ffa4, #59bc86)'
				: !correct && userClicked
				? 'linear-gradient(90deg, #ff5656, #c16868)'
				: 'linear-gradient(90deg, #56ccff, #6eafb4)'};
	}
`;
