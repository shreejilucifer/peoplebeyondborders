import {
	Container,
	Content,
	Images,
	Overlay,
	Title,
	Data,
	DotContainer,
	LearnMore,
} from './style';
import { useState } from 'react';
import Carousel from 'nuka-carousel';

const images = [
	'/images/banner-2.jpg',
	// '/images/banner-1.jpg',
	// '/images/banner-3.jpg',
];

const HeroCarousel = () => {
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
			<Content>
				<Title>
					Empowering displaced communities & refugees - is our call to action.
				</Title>
				<Data>
					We aim to transform the way the displaced communities and refugees
					connect with each other as well as with the world around them.
				</Data>
				<LearnMore>Learn more</LearnMore>
			</Content>
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

			<Overlay src="/images/shape-01.svg" />
		</Container>
	);
};

export default HeroCarousel;
