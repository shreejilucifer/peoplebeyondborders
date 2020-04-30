import styles from './wherewework.module.css';
import { Title, SubTitle, Content } from '../Typography';

const WhereWeWork = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Title>Where We Work</Title>
				<div className={styles.animationContainer}>
					<img alt="animation" />
				</div>
				<Content>
					We work all over the world in collaboration with our networks: local
					partner organizations, community members, government authorities,
					international agencies, think tanks and different changemakers.
				</Content>
			</div>
			<img src="/clips/wherewework.svg" />
		</div>
	);
};

export default WhereWeWork;
