import Navbar from '../src/components/common/Navbar';
import Footer from '../src/components/common/Footer';
import LightSection from '../src/components/common/LightSection';
import HeroCarousel from '../src/components/common/HeroCarousel';
import OurInitiatives from '../src/components/OurInitiatives';

const WhatWeDoPage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<OurInitiatives />
			</LightSection>
			<Footer />
		</div>
	);
};

export default WhatWeDoPage;
