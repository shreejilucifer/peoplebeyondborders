import styles from './whyitmatters.module.css';
import { Title, Content } from '../common/Typography';

const WhyItMatters = () => {
	return (
		<React.Fragment>
			<Title>Why It Matters</Title>
			<div className={styles.imageContainer}>
				<img alt="why-it-matters" />
			</div>
			<div className={styles.imageCaption}>DISPLACED IN 2020</div>
			<div className={styles.numbers}>70,754,326</div>
			<Content>
				2020 is the eighth year in a row that the number of displaced people has
				continued to increase. Today, we are facing an unprecedented level of
				forced displacement ever recorded. The actual figures are probably even
				higher because not all human displacement and mobility are reported.
				Approximately, 41.3 million are internally displaced people, 25.9
				million are refugees and 3.5 million are asylum seekers fleeing
				disasters, climate change, environmental issues, conflicts, persecution
				and violence of all forms.
			</Content>
		</React.Fragment>
	);
};

export default WhyItMatters;
