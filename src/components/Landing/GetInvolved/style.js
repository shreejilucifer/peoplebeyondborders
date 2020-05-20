import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
	display: grid;
	grid-template-columns: 50% 50%;
	max-width: 1440px;
	/* Mobile */
	@media (max-width: 425px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

export const LinksContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 90%;
	justify-content: space-evenly;
	justify-self: center;
	/* Mobile */
	@media (max-width: 425px) {
		width: 95%;
	}
`;

export const Title = styled.div`
	font-size: 50px;
	font-weight: 500;
	line-height: 1.18;
	font-family: 'Rubik';
	text-align: left;
	color: var(--black);
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 50px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 40px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: none;
	}
`;

export const MobileTitle = styled.div`
	display: none;
	font-weight: 500;
	line-height: 1.18;
	font-family: 'Rubik';
	text-align: center;
	color: var(--black);
	font-size: 30px;
	margin-top: 20px;
	/* Mobile */
	@media (max-width: 425px) {
		display: block;
	}
`;

export const CardContainer = styled.div`
	height: 80px;
	background-color: var(--white);
	border-radius: 10px;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	padding-left: 15px;
	padding-right: 15px;
	/* Mobile */
	@media (max-width: 425px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export const CardTitle = styled.div`
	font-size: 25px;
	font-weight: 600;
	font-family: 'Muli';
	text-align: left;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 20px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const ArrowContainer = styled.div`
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
