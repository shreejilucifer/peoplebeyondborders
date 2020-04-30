import styles from '../src/styles/indexpage.module.css';
import Navbar from '../src/components/Navbar';
import HeroCarousel from '../src/components/HeroCarousel';
import WhatWeDo from '../src/components/WhatWeDo';
import WhereWeWork from '../src/components/WhereWeWork';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<HeroCarousel />
			<WhatWeDo />
			<WhereWeWork />
			helo
		</div>
	);
};

export default IndexPage;
