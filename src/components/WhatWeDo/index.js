import styles from './whatwedo.module.css';
import { Title, SubTitle, Content } from '../Typography';

const WhatWeDo = () => {
	return (
		<div className={styles.container}>
			<Title>What we do</Title>
			<SubTitle>
				Self-empowerment of displaced communities and refugees is our call to
				action!
			</SubTitle>
			<Content>
				People Beyond Borders is run by, for and with displaced communities and
				refugees. People who are forced to flee are active agents, perceived as
				partners rather than mere beneficiaries. We work in collaboration “with”
				rather than “on” them
			</Content>
			<Content>
				Our mission is to co-create safe spaces with displaced communities and
				refugees by channelizing resilience, creative strength, skill sets and
				sustainable networks to empower themselves and the world around them.
			</Content>
		</div>
	);
};

export default WhatWeDo;
