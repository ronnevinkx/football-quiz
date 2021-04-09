import styled, { createGlobalStyle } from 'styled-components';
import backgroundImg from './images/background-beach.jpg';

const colorWhite = '#FFFFFF';

export const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Catamaran', 'Helvetica', sans-serif;
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	html {
		height: 100%
	}

	body {
		display: flex;
		justify-content: center;
		background-size: cover;
		background-image: url(${backgroundImg});
	}

	.mt-20 {
		margin-top: 20px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 0 16px;

	> p {
		color: ${colorWhite};
	}

	.score {
		font-size: 2rem;
		color: ${colorWhite};
	}

	h1 {
		font-family: Fascinate, Helvetica, sans-serif;
		font-weight: 400;
		font-size: 70px;
		margin: 20px;
		line-height: 1;
		text-align: center;
		text-transform: uppercase;
		background-image: linear-gradient(180deg, ${colorWhite}, #87f1ff);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #0085a3);
	}

	.buttons {
		margin-top: 20px;
	}

	button.next,
	button.start {
		cursor: pointer;
		margin: 10px 0;
		padding: 10px 40px;
		border: 2px solid #d38558;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
		background: linear-gradient(180deg, ${colorWhite}, #ffcc91);
	}

	button.next {
		margin-top: 20px;
	}

	button.start {
		font-size: 1.5rem;
		padding: 15px 50px;
		border-radius: 15px;
		max-width: 200px;
	}

	button.start.mt-20 {
		margin-top: 20px;
	}

	@media screen and (max-width: 500px) {
		h1 {
			font-size: 50px;
		}
	}
`;
