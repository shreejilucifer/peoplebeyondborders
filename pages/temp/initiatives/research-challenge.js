import Navbar from '../../../src/components/common/Navbar';
import Footer from '../../../src/components/common/Footer';
import LightSection from '../../../src/components/common/LightSection';
import HeroCarousel from '../../../src/components/HeroCarousel';
import { Challenge } from '../../src/components/ResearchChallenge';

const ReasearchChallengePage = () => {
	return (
		<div>
			<Navbar />
			<HeroCarousel />
			<LightSection>
				<Challenge />
			</LightSection>
			<Footer />
		</div>
	);
};

export default ReasearchChallengePage;
