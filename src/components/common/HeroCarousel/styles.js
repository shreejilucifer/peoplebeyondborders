import styled from 'styled-components';

export const Container = styled.div`
	height: 825px;
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
`;

export const Content = styled.div`
	padding-top: 200px;
	margin-left: 60px;
	width: 40%;
	/* Laptop */
	@media (max-width: 1024px) {
		padding-top: 150px;
		width: 45%;
	}
	/* Tablet */
	@media (max-width: 768px) {
		padding-top: 100px;
		width: 55%;
	}
	/* Mobile */
	@media (max-width: 425px) {
		padding-top: 90px;
		margin-left: 20px;
		width: 90%;
	}
`;

export const Title = styled.div`
	font-size: 50px;
	color: var(--white);
	font-family: 'Rubik';
	font-weight: bold;
	line-height: 1.19;
	text-align: left;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 40px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 35px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 33px;
	}
`;

export const Data = styled.div`
	font-size: 25px;
	color: var(--white);
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	line-height: 1.31;
	font-weight: 600;
	font-family: 'Muli';
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 20px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 18px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 15px;
	}
`;

export const LearnMore = styled.div`
	width: 200px;
	background-color: var(--secondary);
	color: var(--black);
	font-family: 'Muli';
	font-size: 25px;
	font-weight: 600;
	line-height: 1.24;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-top: 30px;
	border-radius: 15px;
	cursor: pointer;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 20px;
		width: 150px;
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
