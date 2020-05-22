import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--white);
	margin-top: 25px;
	max-width: 1440px;
	/* Laptop */
	@media (max-width: 1024px) {
		padding-left: 35px;
		padding-right: 35px;
		width: auto;
	}
	/* Tablet */
	@media (max-width: 768px) {
		padding-left: 20px;
		padding-right: 20px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		padding-left: 15px;
		padding-right: 15px;
	}
`;

export const Title = styled.div`
	color: var(--black);
	font-family: var(--titleFont);
	font-size: var(--titleSize);
	font-stretch: normal;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: center;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 40px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 40px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 35px;
	}
`;

export const Grid = styled.div`
	margin-top: 40px;
	display: grid;
	grid-template-columns: 33.33% 33.33% 33.33%;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	/* Laptop */
	@media (max-width: 1024px) {
		margin-top: 35px;
		width: 85%;
	}
	/* Tablet */
	@media (max-width: 768px) {
		margin-top: 30px;
		width: 90%;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: flex;
		flex-direction: column;
		margin-top: 25px;
	}
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	/* Mobile */
	@media (max-width: 425px) {
		margin-bottom: 40px;
		&:nth-last-child(1) {
			margin-bottom: 0px;
		}
	}
`;

export const ItemImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	& > img {
		width: 80%;
	}
	/* Tablet */
	@media (max-width: 768px) {
		& > img {
			width: 80%;
		}
	}
	/* Mobile */
	@media (max-width: 425px) {
		& > img {
			width: auto;
		}
	}
`;

export const ItemTitle = styled.div`
	margin-top: 10px;
	font-family: 'Poppins';
	font-size: 20px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 18px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 16px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 14px;
	}
`;

export const ItemNumbers = styled.span`
	margin-top: 10px;
	font-size: 45px;
	color: var(--primary);
	font-family: 'Poppins';
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: center;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 45px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 35px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		font-size: 35px;
	}
`;

export const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	width: 79%;
	font-family: var(--bodyFont);
	font-size: 1.25em;
	color: var(--black);
	line-height: 1.2em;
	text-align: center;
	/* Laptop */
	@media (max-width: 1024px) {
		margin-top: 35px;
		font-size: 20px;
		width: 90%;
	}
	/* Tablet */
	@media (max-width: 768px) {
		margin-top: 30px;
		font-size: 20px;
		width: 98%;
	}
	/* Mobile */
	@media (max-width: 425px) {
		margin-top: 25px;
		font-size: 20px;
		width: 100%;
	}
`;

export const LinkButton = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
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
	font-weight: 400;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.24;
	letter-spacing: normal;
	text-align: center;
	color: var(--black);

	&:hover {
		cursor: pointer;
		font-weight: 500;
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
