import Head from 'next/head';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/common/HeroCarousel';
import WhatWeDo from '../src/components/DiscoverUs/WhatWeDo';
import Footer from '../src/components/common/Footer';

import styled from 'styled-components';
import WhereWeWork from '../src/components/DiscoverUs/WhereWeWork';
import HowWeCreateImpact from '../src/components/DiscoverUs/HowWeCreateImpact';

const images = ['/images/discoverus-banner-1.jpg'];

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DiscoverUsPage = () => {
	return (
		<Page>
			<Head>
				<title>Discover Us - People Beyond Borders</title>
			</Head>
			<Navbar />
			<HeroCarousel
				images={images}
				content={false}
				overlayImg="/images/shape-02.png"
			/>
			<WhatWeDo />
			<WhereWeWork />
			<HowWeCreateImpact />
			<Footer />
		</Page>
	);
};

export default DiscoverUsPage;

/*
			<LightSection>
				<WhatWeDo />
			</LightSection>
			<DarkSection>
				<WhereWeWork />
			</DarkSection>
			<LightSection>
				<HowWeCreateImpact />
			</LightSection>
			<DarkSection>
				<WhyItMatters />
			</DarkSection>
			<LightSection>
				<DisplacedTypes />
			</LightSection>
*/
