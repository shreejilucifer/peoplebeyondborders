import Head from 'next/head';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/common/HeroCarousel';
import AboutUs from '../src/components/Landing/AboutUs';
import OurInitiatives from '../src/components/Landing/OurInitiatives';
import ResourcesAndStories from '../src/components/Landing/ResourcesAndStories';
import GetInvolved from '../src/components/Landing/GetInvolved';
import Footer from '../src/components/common/Footer';

import styled from 'styled-components';

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const IndexPage = () => {
	return (
		<Page>
			<Head>
				<title>People Beyond Borders</title>
			</Head>
			<Navbar />
			<HeroCarousel />
			<AboutUs />
			<OurInitiatives />
			<ResourcesAndStories />
			<GetInvolved />
			<Footer />
		</Page>
	);
};

export default IndexPage;
