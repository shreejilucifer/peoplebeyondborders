import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Page = ({ children, title }) => {
	return (
		<Wrapper>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</Wrapper>
	);
};

export default Page;
