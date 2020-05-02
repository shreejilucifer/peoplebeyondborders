import Navbar from '../../src/components/common/Navbar';
import Footer from '../../src/components/common/Footer';
import LightSection from '../../src/components/common/LightSection';
import HeroCarousel from '../../src/components/HeroCarousel';
import WhereWeWork from '../src/components/WhereWeWork';

const WhereWeWorkPage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<WhereWeWork />
			</LightSection>
			<Footer />
		</div>
	);
};

export default WhereWeWorkPage;
