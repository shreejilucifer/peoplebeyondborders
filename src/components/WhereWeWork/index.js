import styles from './wherewework.module.css';
import { Title, Content } from '../common/Typography';

const WhereWeWork = () => {
	return (
		<React.Fragment>
			<Title>Where We Work</Title>
			<div className={styles.animationContainer}>
				<img alt="animation" />
			</div>
			<Content>
				We work all over the world in collaboration with our networks: local
				partner organizations, community members, government authorities,
				international agencies, think tanks and different changemakers.
			</Content>
		</React.Fragment>
	);
};

export default WhereWeWork;
