import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
	max-width: 1440px;
	width: 100%;
`;

export const WavesTop = styled.img`
	transform: translateY(5px);
	width: 100%;
`;

export const WavesBottom = styled.img`
	transform: translateY(-5px);
	width: 100%;
`;

export const Content = styled.div`
	padding-top: 40px;
	padding-bottom: 10px;
	${(props) =>
		props.waves &&
		css`
			background: rgb(83, 187, 213);
			background: linear-gradient(
				180deg,
				rgba(69, 190, 206, 1) 10%,
				rgba(175, 208, 104, 1) 100%
			);
		`}
`;

export const WhiteBG = styled.div`
	width: 50%;
	height: 350px;
	background-color: var(--white);
	margin-left: auto;
	margin-right: auto;
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const WriteUp = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 80px;
	margin-bottom: 80px;
	font-family: 'Muli-Regular';
	font-size: 1.5rem;
	line-height: 1.3em;
	text-align: center;
	color: var(--black);
	${(props) =>
		props.waves &&
		css`
			color: var(--white);
		`}
`;
