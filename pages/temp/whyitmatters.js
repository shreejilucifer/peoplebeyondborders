import Navbar from '../../src/components/common/Navbar';
import Footer from '../../src/components/common/Footer';
import LightSection from '../../src/components/common/LightSection';
import HeroCarousel from '../../src/components/HeroCarousel';
import WhyItMatters from '../src/components/WhyItMatters';

const WhyItMattersPage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<WhyItMatters />
			</LightSection>
			<Footer />
		</div>
	);
};

export default WhyItMattersPage;
