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
`;

export const Images = styled.div`
	height: 800px;
	width: 100%;
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

export const Overlay = styled.img`
	position: absolute;
	top: 800px;
	width: 100%;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	transform: translateY(-100%);
	/* Laptop */
	@media (max-width: 1024px) {
		top: 625px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		top: 526px;
	}
`;

export const Content = styled.div`
	padding-top: 250px;
	margin-left: 100px;
	width: 38%;
	/* Laptop */
	@media (max-width: 1024px) {
		padding-top: 150px;
		width: 45%;
		margin-left: 75px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		padding-top: 100px;
		width: 55%;
		margin-left: 50px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		padding-top: 90px;
		margin-left: 20px;
		width: 90%;
	}
`;

export const Title = styled.div`
	font-size: 45px;
	color: var(--white);
	font-family: 'Rubik';
	font-weight: 600;
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
	width: 95%;
	font-size: 22px;
	color: var(--white);
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	line-height: 1.31;
	font-weight: 500;
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
	font-size: 20px;
	font-weight: 500;
	line-height: 1.24;
	text-align: center;
	padding-top: 15px;
	padding-bottom: 15px;
	margin-top: 40px;
	border-radius: 15px;

	&:hover {
		cursor: pointer;
		font-weight: 600;
		background-color: var(--primary);
	}

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
