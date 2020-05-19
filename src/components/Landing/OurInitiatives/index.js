import {
	CardContainer,
	Container,
	CardContent,
	CardImage,
	CardTitle,
	Grid,
	Title,
	UnderLine,
} from './styles';

const Card = ({ img, title, content }) => (
	<CardContainer>
		<CardImage>
			<img src={img} alt={title} />
		</CardImage>
		<CardTitle>{title}</CardTitle>
		<UnderLine />
		<CardContent>{content}</CardContent>
	</CardContainer>
);

const OurInitiatives = () => {
	return (
		<Container
			style={{ backgroundImage: 'url(/images/our-initiatives-bg.png)' }}
		>
			<Title>Our Initiatives</Title>
			<Grid>
				<Card
					img="/images/our-initiative-1.png"
					title="Research Challenge"
					content="Not all displacement crises are recorded and reported, often languishing in the shadows emergency response and prevention…"
				/>
				<Card
					img="/images/our-initiative-2.png"
					title="Psychosocial Support"
					content="Natural and manmade disasters affect displaced women, youth and children’s feeling of security, hope and stability…"
				/>
				<Card
					img="/images/our-initiative-3.png"
					title="Virtual Platform"
					content="There are several online learning opportunities, even mobile apps and simulation games, developed for/by…"
				/>
			</Grid>
		</Container>
	);
};

export default OurInitiatives;
