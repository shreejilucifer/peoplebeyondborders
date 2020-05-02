import Navbar from '../src/components/common/Navbar';
import Footer from '../src/components/common/Footer';
import LightSection from '../src/components/common/LightSection';
import HeroCarousel from '../src/components/common/HeroCarousel';
import HowWeCreateImpact from '../src/components/HowWeCreateImpact';

const HowWeCreateImpactPage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<HowWeCreateImpact />
			</LightSection>
			<Footer />
		</div>
	);
};

export default HowWeCreateImpactPage;
