import styles from './displacedtypes.module.css';
import LightSection from '../common/LightSection';
import { SubTitle, Content } from '../common/Typography';
import Link from 'next/link';

const Type = ({ caption }) => (
	<div className={styles.type}>
		<img alt={caption} />
		<div className={styles.typeCaption}>{caption}</div>
	</div>
);

const DisplacedTypes = () => {
	return (
		<LightSection>
			<SubTitle>Over half of all displaced people are children</SubTitle>
			<div className={styles.typesContainer}>
				<Type caption="Separated from Families" />
				<Type caption="Separated from Families" />
				<Type caption="Separated from Families" />
				<Type caption="Separated from Families" />
				<Type caption="Separated from Families" />
				<Type caption="Separated from Families" />
			</div>
			<Content style={{ textAlign: 'left', marginBottom: '3vh' }}>
				Either most are internally displaced persons (IDPs) in their home
				countries or about 80% of those displaced tend to seek refuge in their
				neighboring countries. Overburdened developing countries face the
				repercussions when political authorities shut doors for displaced
				persons. In such situations, it is underestimated how local people
				support the displaced. Often, it is the vulnerable, disadvantaged
				communities as well as those who themselves might be IDPs in their
				country that end up hosting the refugees and displaced people. Hosting
				isn’t limited to providing resources but also includes being a liaison,
				creating support structures, sharing livelihood opportunities and
				enhancing the overall wellbeing. It is powerful to see how humans
				empower humans!
			</Content>
			<Content style={{ textAlign: 'left', marginBottom: '3vh' }}>
				Why does any of this matter? It matters because empathy, resilience,
				care, hope and strength drive us even when at times it might feel that
				we are operating from the lack of it. It matters because we have the
				agency to transform our own stories, narratives, spaces and empower
				those around us.
			</Content>
			<Content style={{ textAlign: 'left' }}>
				Want to inspire lives?
				<Link href="/">
					<a>Get Involved</a>
				</Link>
			</Content>
		</LightSection>
	);
};

export default DisplacedTypes;
