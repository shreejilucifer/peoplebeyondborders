import styles from '../src/styles/indexpage.module.css';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/HeroCarousel';
import WhatWeDo from '../src/components/WhatWeDo';
import WhereWeWork from '../src/components/WhereWeWork';
import HowWeCreateImpact from '../src/components/HowWeCreateImpact';
import WhyItMatters from '../src/components/WhyItMatters';
import DisplacedTypes from '../src/components/DisplacedTypes';
import Footer from '../src/components/common/Footer';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<HeroCarousel />
			<WhatWeDo />
			<WhereWeWork />
			<HowWeCreateImpact />
			<WhyItMatters />
			<DisplacedTypes />
			<Footer />
		</div>
	);
};

export default IndexPage;
