import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	height: 855px;
	background-position: top left;
	background-size: contain;
	background-repeat: no-repeat;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 620px;
		min-width: 1024px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 460px;
		min-width: 768px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		height: auto;
		background-size: cover;
		background-position: center;
		min-width: 100vw;
	}
`;

export const Title = styled.div`
	text-align: center;
	padding-top: 160px;
	font-family: 'Rubik';
	font-weight: 500;
	font-size: 65px;
	line-height: 1.18;
	color: var(--white);
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 55px;
		padding-top: 110px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 45px;
		padding-top: 80px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 35px;
		padding-top: 170px;
	}
`;

export const Grid = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	/* Laptop */
	@media (max-width: 1024px) {
		margin-top: 20px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		margin-top: 0px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		margin-top: 15px;
		flex-direction: column;
		align-items: center;
	}
`;

export const CardContainer = styled.div`
	height: 400px;
	width: 300px;
	background-color: var(--white);
	border-radius: 15px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 300px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 230px;
		width: 200px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		height: auto;
		width: 95%;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		&:nth-child(even) {
			flex-direction: row-reverse;
		}
		&:nth-last-child(1) {
			margin-bottom: 200px;
		}
	}
`;

export const CardImage = styled.div`
	/* Laptop */
	@media (max-width: 1024px) {
		height: 50%;
		& > img {
			height: 100%;
		}
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 30%;
	}
	/* Mobile */
	@media (max-width: 425px) {
		padding-top: 5px;
		padding-bottom: 5px;
		& > img {
			height: 180px;
		}
	}
`;

export const CardTitle = styled.div`
	font-family: 'Muli';
	font-size: 24px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
	margin-top: 5px;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 20px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 15px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 20px;
	}
`;

export const UnderLine = styled.div`
	width: 90px;
	background-color: var(--primary);
	height: 3px;
	border-radius: 1.5px;
	margin-top: 5px;
	/* Mobile */
	@media (max-width: 425px) {
		display: none;
	}
`;

export const CardContent = styled.div`
	margin-top: 20px;
	font-family: 'Muli';
	font-size: 15px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.26;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 15px;
		height: 3.5rem;
		overflow-y: hidden;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 4.6rem;
		margin-top: 10px;
		font-size: 12px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: none;
	}
`;
