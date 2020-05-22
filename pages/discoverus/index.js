import Page from '../../src/components/common/Page';
import HeroCarousel from '../../src/components/common/HeroCarousel';
import WhatWeDo from '../../src/components/DiscoverUs/WhatWeDo';

import WhereWeWork from '../../src/components/DiscoverUs/WhereWeWork';
import HowWeCreateImpact from '../../src/components/DiscoverUs/HowWeCreateImpact';
import WhyItMatters from '../../src/components/DiscoverUs/WhyItMatters';
import Displaced from '../../src/components/DiscoverUs/Displaced';

const images = ['/images/discoverus-banner-1.jpg'];

const DiscoverUsPage = () => {
	return (
		<Page title="Discover Us - People Beyond Borders">
			<HeroCarousel
				images={images}
				content={false}
				overlayImg="/images/shape-02.png"
			/>
			<WhatWeDo />
			<WhereWeWork waves={true} />
			<HowWeCreateImpact />
			<WhyItMatters />
			<Displaced />
		</Page>
	);
};

export default DiscoverUsPage;

/*
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
*/
