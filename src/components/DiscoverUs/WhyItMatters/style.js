import styled from 'styled-components';

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
	background-color: rgb(227, 248, 254);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	margin-top: 40px;
	width: 15%;
`;

export const SmallText = styled.div`
	margin-top: 20px;
	font-family: 'Poppins';
	font-size: 20px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
`;

export const Numbers = styled.div`
	margin-top: 20px;
	font-size: 45px;
	color: var(--black);
	font-family: 'Poppins';
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: center;
`;

export const Data = styled.div`
	width: 91%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	margin-bottom: 40px;
	font-family: 'Muli-Regular';
	font-size: 29px;
	line-height: 35px;
	text-align: center;
`;
