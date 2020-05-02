import styles from './researchchallenge.module.css';
import { Title, Content } from '../common/Typography';

const Challenge = () => {
	return (
		<React.Fragment>
			<Title>Where We Work</Title>
			<div className={styles.imageContainer}>
				<img alt="research-challenge" />
			</div>
			<Content>
				We work all over the world in collaboration with our networks: local
				partner organizations, community members, government authorities,
				international agencies, think tanks and different changemakers.
			</Content>
		</React.Fragment>
	);
};

const Examples = () => {
	return (
		<React.Fragment>
			<Content>
				<div>Few Examples Are:</div>
				<div>
					<ul>
						<li>
							What are the displacement patterns of the drought-affected people
							in India?
						</li>
						<li>
							How has internal displacement perpetuated due to famine in the
							Sahel region and Horn of Africa?
						</li>
						<li>
							Have the ceasefire commitments mitigated displacement tensions in
							the prolonged armed conflict in eastern Ukraine?
						</li>
						<li>
							Why are 4.6 million Venezuelans, one of the largest population
							movements, fleeing the country?
						</li>
						<li>
							Are there any sustainable solutions for the Palestinian refugee
							problem?
						</li>
					</ul>
				</div>
			</Content>
		</React.Fragment>
	);
};
export { Challenge };
