import {
	Container,
	Content,
	Images,
	Overlay,
	Title,
	Data,
	LearnMore,
} from './style';
import Carousel from 'nuka-carousel';

const images = [
	'/images/banner-2.jpg',
	'/images/banner-1.jpg',
	'/images/banner-3.jpg',
];

const HeroCarousel = () => {
	return (
		<Container>
			<Carousel
				autoplayInterval={5000}
				transitionMode="fade"
				wrapAround={true}
				autoplay
				withoutControls
				dragging={false}
				style={{ position: 'absolute', zIndex: -1 }}
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
			<Overlay src="/images/shape-01.svg" />
		</Container>
	);
};

export default HeroCarousel;
