import styles from '../src/styles/indexpage.module.css';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/HeroCarousel';
import AboutUs from '../src/components/Landing/AboutUs';
import OurInitiatives from '../src/components/Landing/OurInitiatives';
import ResourcesAndStories from '../src/components/Landing/ResourcesAndStories';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<HeroCarousel />
			<AboutUs />
			<OurInitiatives />
			<ResourcesAndStories />
		</div>
	);
};

export default IndexPage;
