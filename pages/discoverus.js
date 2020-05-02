import styles from '../src/styles/indexpage.module.css';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/common/HeroCarousel';
import WhatWeDo from '../src/components/WhatWeDo';
import WhereWeWork from '../src/components/WhereWeWork';
import HowWeCreateImpact from '../src/components/HowWeCreateImpact';
import WhyItMatters from '../src/components/WhyItMatters';
import DisplacedTypes from '../src/components/DisplacedTypes';
import Footer from '../src/components/common/Footer';
import DarkSection from '../src/components/common/DarkSection';
import LightSection from '../src/components/common/LightSection';

const DiscoverUsPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<HeroCarousel />

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

			<Footer />
		</div>
	);
};

export default DiscoverUsPage;
