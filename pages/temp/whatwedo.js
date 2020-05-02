import Navbar from '../../src/components/common/Navbar';
import Footer from '../../src/components/common/Footer';
import LightSection from '../../src/components/common/LightSection';
import HeroCarousel from '../../src/components/HeroCarousel';
import WhatWeDo from '../src/components/WhatWeDo';

const WhatWeDoPage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<WhatWeDo />
			</LightSection>
			<Footer />
		</div>
	);
};

export default WhatWeDoPage;
