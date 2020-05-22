import {
	Container,
	WavesTop,
	WavesBottom,
	Content,
	Image,
	SmallText,
	Numbers,
	Data,
} from './style';
import SectionTitle from '../../common/SectionTitle';

const WhyItMatters = () => {
	return (
		<Container>
			<WavesTop src="/images/blue-top.png" />
			<Content>
				<SectionTitle color="black">Why it matters</SectionTitle>
				<Image src="/images/aboutus-2020.png" />
				<SmallText>DISPLACED IN 2020</SmallText>
				<Numbers>70,754,326</Numbers>
				<Data>
					2020 is the eighth year in a row that the number of displaced people
					has continued to increase. Today, we are facing an unprecedented level
					of forced displacement ever recorded. The actual figures are probably
					even higher because not all human displacement and mobility are
					reported. Approximately, 41.3 million are internally displaced people,
					25.9 million are refugees and 3.5 million are asylum seekers fleeing
					disasters, climate change, environmental issues, conflicts,
					persecution and violence of all forms.
				</Data>
			</Content>
			<WavesBottom src="/images/blue-bottom.png" />
		</Container>
	);
};

export default WhyItMatters;
