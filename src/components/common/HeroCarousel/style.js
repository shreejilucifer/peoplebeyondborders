import styled from 'styled-components';

export const Container = styled.div`
	height: 800px;
	background-size: contain;
	background-repeat: no-repeat;
	max-width: 1440px;
	background-position: top left;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 625px;
		background-size: cover;
		background-position: bottom;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 525px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		width: 100%;
	}
`;

export const Images = styled.div`
	height: 800px;
	max-width: 1440px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 625px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 525px;
	}
`;

export const WaveContainer = styled.div`
	position: absolute;
	float: bottom;
	z-index: -1;
	-webkit-transform: translate3d(0, -15%, 0);
	width: 100%;
	max-width: 1440px;

	& > img {
		height: auto;
		width: 100%;
		max-width: 1440px;
	}

	/* Laptop */
	@media (max-width: 1024px) {
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 100%;
	}
	/* Mobile */
	@media (max-width: 425px) {
		height: 74%;

		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;

		& > img {
			margin-top: auto;
		}
	}
`;

export const DotContainer = styled.div`
	position: absolute;
	height: 800px;
	top: 0;
	right: 0;
	margin-left: auto;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > div {
		height: 10px;
		width: 10px;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	/* Laptop */
	@media (max-width: 1024px) {
		height: 625px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 526px;
	}
`;

export const Content = styled.div`
	padding-top: 245px;
	margin-left: 100px;
	/* Laptop */
	@media (max-width: 1024px) {
		padding-top: 210px;
		margin-left: 75px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		padding-top: 100px;
		margin-left: 50px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		padding-top: 90px;
		margin-left: 20px;
	}
`;

export const Title = styled.div`
	text-align: left;
	color: var(--white);
	font-size: 42px;
	font-family: 'Rubik-Bold';
	letter-spacing: 1px;
	width: 40%;
	line-height: 1.2;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 30px;
		width: 40%;
		line-height: 1.1;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 35px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 33px;
		width: 300px;
	}
`;

export const Data = styled.div`
	margin-top: 5px;
	width: 38%;
	font-size: 22px;
	color: var(--white);
	font-family: var(--subtitleFont);
	line-height: 1.31;
	word-spacing: 1px;
	/* Laptop */
	@media (max-width: 1024px) {
		margin-top: 15px;
		font-size: 15px;
		line-height: 1.2;
		word-spacing: 3px;
		width: 39%;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 18px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 15px;
		width: 300px;
	}
`;

export const LearnMore = styled.div`
	width: 13%;
	background-color: var(--secondary);
	color: var(--black);
	font-family: 'Muli-SemiBold';
	font-size: 15px;
	text-align: center;
	padding-top: 15px;
	padding-bottom: 15px;
	font-weight: 600;
	margin-top: 40px;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		font-weight: 600;
		background-color: var(--primary);
	}

	/* Laptop */
	@media (max-width: 1024px) {
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 15px;
		width: 13%;
		border-radius: 8px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 18px;
		width: 130px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 15px;
		width: 120px;
	}
`;
