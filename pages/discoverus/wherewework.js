import Page from '../../src/components/common/Page';
import HeroCarousel from '../../src/components/common/HeroCarousel';

import WhereWeWork from '../../src/components/DiscoverUs/WhereWeWork';

const images = ['/images/discoverus-banner-1.jpg'];

const WhereWeWorkPage = () => {
	return (
		<Page title="Where We Work - People Beyond Borders">
			<HeroCarousel
				images={images}
				content={false}
				overlayImg="/images/shape-02.png"
			/>
			<WhereWeWork waves={false} />
		</Page>
	);
};

export default WhereWeWorkPage;
