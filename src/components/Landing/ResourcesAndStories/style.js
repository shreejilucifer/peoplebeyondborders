import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.div`
	text-align: center;
	font-family: 'Rubik';
	font-size: 55px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.18;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
	margin-top: 30px;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 55px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 45px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 35px;
		margin-top: 0px;
	}
`;

export const Container = styled.div`
	margin-top: 40px;
	width: 100%;
	/* Mobile */
	@media (max-width: 425px) {
		width: 100%;
		margin-top: 20px;
	}
`;

export const Grid = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* Mobile */
	@media (max-width: 425px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	width: 50%;
	/* Mobile */
	@media (max-width: 425px) {
		width: 100%;

		&:nth-child(2) > div:nth-child(1) {
			display: none;
		}
	}
`;

export const HorizontalCardContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	&:nth-child(1) {
		align-items: flex-end;
	}
`;

export const VerticalCardContainer = styled.div`
	height: 320px;
	width: 95%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	/* Mobile */
	@media (max-width: 425px) {
		width: 100%;
		height: 240px;
	}
`;

export const HorizontalCardActual = styled.div`
	width: 95%;
	height: 95%;
	border-radius: 10px;
	background-position: top;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #bcbcbc;
	/* Mobile */
	@media (max-width: 425px) {
		background-position: center;
	}
`;

export const VerticalCardActual = styled.div`
	width: 95%;
	height: 95%;
	border-radius: 10px;
	background-position: top;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #bcbcbc;
	/* Mobile */
	@media (max-width: 425px) {
		background-position: center;
	}
`;

export const HorizontalCardCountry = styled.div`
	margin-left: 5%;
	margin-top: 15px;
	color: var(--white);
	font-family: 'Muli';
	font-weight: bold;
	text-align: left;
	text-transform: uppercase;
	font-size: 1rem;
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 28px;
	}
`;

export const VerticalCardCountry = styled.div`
	margin-left: 5%;
	margin-top: 15px;
	color: var(--white);
	font-family: 'Muli';
	font-weight: bold;
	text-align: left;
	text-transform: uppercase;
	font-size: 1rem;
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 24px;
	}
`;

export const HorizontalCardTitle = styled.div`
	margin-left: 5%;
	margin-top: 15px;
	width: 50%;
	color: var(--white);
	font-weight: 500;
	font-family: 'Muli';
	font-size: 30px;

	/* Mobile */
	@media (max-width: 425px) {
		width: 75%;
		font-size: 35px;
	}
`;

export const VerticalCardTitle = styled.div`
	margin-left: 5%;
	margin-top: 15px;
	width: 75%;
	color: var(--white);
	font-weight: 500;
	font-family: 'Muli';
	font-size: 30px;

	/* Mobile */
	@media (max-width: 425px) {
		font-size: 35px;
	}
`;

export const HorizontalCardLinkbtn = styled.div`
	margin-left: 5%;
	margin-bottom: 15px;
	background-color: var(--secondary);
	width: 25%;
	height: 30px;
	background-color: var(--white);
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-family: 'Muli';
	font-weight: 400;
	text-align: center;
	&:hover {
		cursor: pointer;
		background-color: var(--primary);
		font-weight: 500;
	}
`;

export const VerticalCardLinkbtn = styled.div`
	margin-left: 5%;
	margin-bottom: 15px;
	background-color: var(--secondary);
	width: 50%;
	height: 30px;
	background-color: var(--white);
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-family: 'Muli';
	font-weight: 400;
	text-align: center;
	&:hover {
		cursor: pointer;
		background-color: var(--primary);
		font-weight: 500;
	}
	/* Mobile */
	@media (max-width: 425px) {
		width: 25%;
	}
`;

export const LinkButton = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: 80px;
	width: 200px;
	height: 55px;
	border-radius: 15px;
	background-color: var(--secondary);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: 'Muli';
	font-size: 20px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.24;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
	&:hover {
		cursor: pointer;
		font-weight: 600;
		background-color: var(--primary);
	}
	/* Laptop */
	@media (max-width: 1024px) {
		height: 55px;
		width: 190px;
		font-size: 20px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 45px;
		width: 180px;
		font-size: 15px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		height: 35px;
		width: 170px;
		font-size: 15px;
	}
`;
