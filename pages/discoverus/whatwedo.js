import Page from '../../src/components/common/Page';
import HeroCarousel from '../../src/components/common/HeroCarousel';
import WhatWeDo from '../../src/components/DiscoverUs/WhatWeDo';

const images = ['/images/discoverus-banner-1.jpg'];

const WhatWeDoPage = () => {
	return (
		<Page title="What We Do - People Beyond Borders">
			<HeroCarousel
				images={images}
				content={false}
				overlayImg="/images/shape-02.png"
			/>
			<WhatWeDo />
		</Page>
	);
};

export default WhatWeDoPage;
