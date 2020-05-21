import {
	Container,
	Images,
	Overlay,
	DotContainer,
	WaveContainer,
} from './style';
import { useState } from 'react';
import Carousel from 'nuka-carousel';

import { IndexContent } from './Content';

const HeroCarousel = ({ images, content, overlayImg }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	return (
		<Container>
			<Carousel
				slideIndex={slideIndex}
				afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
				autoplayInterval={15000}
				transitionMode="fade"
				wrapAround={true}
				autoplay
				withoutControls
				dragging={false}
				style={{
					position: 'absolute',
					zIndex: -1,
					width: '100%',
					maxWidth: '1440px',
				}}
			>
				{images.map((url, i) => (
					<Images
						key={i}
						style={{
							backgroundImage: `url(${url})`,
						}}
					/>
				))}
			</Carousel>
			<IndexContent visible={content} />
			<DotContainer>
				{images.map((c, i) => (
					<div
						key={i}
						style={
							i === slideIndex
								? { backgroundColor: '#54bdd8' }
								: { backgroundColor: 'white' }
						}
					/>
				))}
			</DotContainer>
			<WaveContainer overlayImg={overlayImg}>
				<img src={overlayImg} />
			</WaveContainer>
		</Container>
	);
};

export default HeroCarousel;
