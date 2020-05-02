import styles from '../src/styles/indexpage.module.css';
import Navbar from '../src/components/common/Navbar';
import HeroCarousel from '../src/components/common/HeroCarousel';
import AboutUs from '../src/components/Landing/AboutUs';
import OurInitiatives from '../src/components/Landing/OurInitiatives';
import ResourcesAndStories from '../src/components/Landing/ResourcesAndStories';
import GetInvolved from '../src/components/Landing/GetInvolved';
import Footer from '../src/components/common/Footer';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<HeroCarousel />
			<AboutUs />
			<OurInitiatives />
			<ResourcesAndStories />
			<GetInvolved />
			<Footer />
		</div>
	);
};

export default IndexPage;
