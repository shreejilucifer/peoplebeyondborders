import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	max-width: 1440px;
	background-image: linear-gradient(
		to bottom,
		#ffffff 15%,
		rgba(255, 255, 255, 0)
	);
`;

export const Container = styled.div`
	height: 120px;
	padding-left: 40px;
	padding-right: 40px;
	display: grid;
	grid-template-columns: 25% 75%;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 100px;
		padding-left: 35px;
		padding-right: 35px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		height: 80px;
		padding-left: 20px;
		padding-right: 20px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		height: 70px;
		grid-template-columns: 50% 50%;
		padding-left: 15px;
		padding-right: 15px;
	}
`;

export const BrandContainer = styled.div`
	margin-top: 20px;
	height: 73px;
	width: 182px;
	& > img {
		width: 100%;
		height: 100%;
	}
	/* Laptop */
	@media (max-width: 1024px) {
		height: 63px;
		width: 172px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		margin-top: 15px;
		width: 80%;
		height: 53px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		margin-top: 2px;
		height: auto;
	}
`;

export const Routes = styled.div`
	margin-top: 20px;
	height: 73px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* Laptop */
	@media (max-width: 1024px) {
		height: 63px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		margin-top: 15px;
		height: 53px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: none;
	}
`;

export const Links = styled.a`
	font-size: 18px;
	font-family: 'Poppins';
	font-weight: 500;
	cursor: pointer;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 15px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 11px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		font-size: 20px;
	}
`;

export const LinksButton = styled.div`
	font-size: 18px;
	font-family: 'Poppins';
	background-color: var(--secondary);
	line-height: 35px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 8px;
	font-weight: 500;
	cursor: pointer;
	/* Laptop */
	@media (max-width: 1024px) {
		font-size: 15px;
		line-height: 30px;
		border-radius: 5px;
	}
	/* Tablet */
	@media (max-width: 768px) {
		font-size: 11px;
		line-height: 20px;
		border-radius: 3px;
	}
	/* Mobile */
	@media (max-width: 425px) {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		padding: 0px;
		line-height: 35px;
	}
`;

export const MobileContainer = styled.div`
	display: none;
	/* Mobile */
	@media (max-width: 425px) {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
	}
`;

export const Hamburger = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin-right: 15px;
	margin-top: 15px;
	height: 35px;
	width: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > div {
		height: 8px;
		background-color: #000;
		border-radius: 3px;
	}
`;

export const DrawerContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	height: 500px;
	width: 100%;
	background-color: var(--primary);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > div:nth-child(1) {
		height: 70px;
		display: grid;
		grid-template-columns: 50% 50%;
		padding-left: 15px;
		padding-right: 15px;
	}
`;
