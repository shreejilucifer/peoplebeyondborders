import { Container, Content, Title, Data, LearnMore } from './style';

const HeroCarousel = () => {
	return (
		<Container style={{ backgroundImage: `url(/images/banner.png)` }}>
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
		</Container>
	);
};

export default HeroCarousel;
