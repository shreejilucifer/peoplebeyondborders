import Page from '../src/components/common/Page';
import HeroCarousel from '../src/components/common/HeroCarousel';
import AboutUs from '../src/components/Landing/AboutUs';
import OurInitiatives from '../src/components/Landing/OurInitiatives';
import ResourcesAndStories from '../src/components/Landing/ResourcesAndStories';
import GetInvolved from '../src/components/Landing/GetInvolved';

import styled from 'styled-components';

const images = [
	'/images/banner-2.jpg',
	'/images/banner-1.jpg',
	'/images/banner-3.jpg',
];

const IndexPage = () => {
	return (
		<Page title="People Beyond Borders">
			<HeroCarousel
				images={images}
				content={true}
				overlayImg="/images/shape-01.svg"
			/>
			<AboutUs />
			<OurInitiatives />
			<ResourcesAndStories />
			<GetInvolved />
		</Page>
	);
};

export default IndexPage;
