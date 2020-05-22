import styled from 'styled-components';

export const Title = styled.div`
	width: 91%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	margin-bottom: 40px;
	font-family: 'Muli-Regular';
	font-size: 28px;
	line-height: 35px;
	text-align: center;
`;

export const Container = styled.div`
	margin-top: 40px;
	max-width: 1440px;
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TypesContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 33.33% 33.33% 33.33%;
`;

export const Type = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;

	& > img {
		border: 1px solid black;
		height: 200px;
		width: 200px;
		margin-bottom: 1vh;
	}
`;

export const TypeCaption = styled.div`
	font-family: 'Muli-Regular';
	font-size: 20px;
	line-height: 38px;
	text-align: center;
`;

export const Data = styled.div`
	width: 85%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	margin-bottom: 40px;
	font-family: 'Muli-Regular';
	font-size: 1.25em;
	line-height: 1.3em;
	text-align: justify;
`;

export const Inspire = styled.div`
	width: 85%;
	align-self: center;
	margin-top: 40px;
	font-family: 'Muli-SemiBold';
	font-size: 1.5em;
	text-align: left;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const Highlight = styled.div`
	color: var(--primary);
`;

export const ArrowContainer = styled.div`
	font-size: 20px;
	height: 40px;
	width: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: 'Rubik';
	color: var(--white);
	background-color: var(--secondary);
	border-radius: 20px;
	&:hover {
		cursor: pointer;
		font-weight: 600;
		background-color: var(--primary);
	}
`;
