import {
	Container,
	Content,
	Grid,
	ItemContainer,
	ItemImageContainer,
	ItemTitle,
	LinkButton,
	Title,
} from './style';
import Ticker from './Ticker';

const GridItem = ({ img, title, numbers }) => (
	<ItemContainer>
		<ItemImageContainer>
			<img src={img} alt="title" />
		</ItemImageContainer>
		<ItemTitle>{title}</ItemTitle>
		<Ticker numbers={numbers} />
	</ItemContainer>
);

const AboutUs = () => {
	return (
		<Container>
			<Title>About Us</Title>
			<Grid>
				<GridItem
					img="/images/aboutus-2010.png"
					title="DISPLACED IN 2010"
					numbers="43700000"
				/>
				<GridItem
					img="/images/aboutus-2015.png"
					title="DISPLACED IN 2015"
					numbers="65000000"
				/>
				<GridItem
					img="/images/aboutus-2020.png"
					title="DISPLACED IN 2020"
					numbers="70754326"
				/>
			</Grid>
			<Content>
				People Beyond Borders is run by, for and with displaced communities and
				refugees. That is, people who are forced to flee are active agents
				rather than subjects where we work in collaboration "with" rather than
				"on" them.
			</Content>
			<LinkButton>Discover More</LinkButton>
		</Container>
	);
};

export default AboutUs;
