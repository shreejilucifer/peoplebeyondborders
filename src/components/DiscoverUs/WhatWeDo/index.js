import { Container, SubTitle, Content, Highlight } from './style';
import SectionTitle from '../../common/SectionTitle';

const WhatWeDo = () => {
	return (
		<Container>
			<SectionTitle color="black">What we do</SectionTitle>
			<SubTitle>
				Self-empowerment of displaced communities and refugees is our call to
				action!
			</SubTitle>
			<Content>
				People Beyond Borders is run by, for and with displaced communities and
				refugees. People who are forced to flee are active agents, perceived as
				partners rather than mere beneficiaries. We work in collaboration “with”
				rather than “on” them
				<br />
				<br />
				Our mission is to <Highlight>co-create safe spaces</Highlight> with
				displaced communities and refugees by channelizing{' '}
				<Highlight>resilience</Highlight>,{' '}
				<Highlight>creative strength</Highlight>,{' '}
				<Highlight>skill sets</Highlight> and{' '}
				<Highlight>sustainable networks</Highlight> to{' '}
				<Highlight>empower</Highlight> themselves and the world around them.
			</Content>
		</Container>
	);
};

export default WhatWeDo;
