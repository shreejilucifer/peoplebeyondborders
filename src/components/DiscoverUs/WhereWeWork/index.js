import {
	Container,
	WavesBottom,
	Content,
	WavesTop,
	WhiteBG,
	WriteUp,
} from './style';
import SectionTitle from '../../common/SectionTitle';

const WhereWeWork = ({ waves }) => {
	return (
		<Container>
			{waves && <WavesTop src="/images/colored-top.png" />}
			<Content waves={waves}>
				<SectionTitle color={waves ? 'white' : 'black'}>
					Where we work
				</SectionTitle>
				<WhiteBG>
					<img src="/images/logo.png" />
				</WhiteBG>
				<WriteUp waves={waves}>
					We work all over the world in collaboration with our networks: local
					partner organizations, community members, government authorities,
					international agencies, think tanks and different changemakers.
				</WriteUp>
			</Content>
			{waves && <WavesBottom src="/images/colored-bottom.png" />}
		</Container>
	);
};

export default WhereWeWork;
