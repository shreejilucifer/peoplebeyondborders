import styles from './ourinitiatives.module.css';
import { Title, Content } from '../common/Typography';
import Link from 'next/link';

const OurInitiatives = () => {
	return (
		<React.Fragment>
			<Title>Our Initiatives</Title>
			<Content>
				Through our initiatives, we aim to transform the way the displaced
				communities and refugees connect with each other as well as with the
				world around them. We have three-fold upcoming initiatives in the
				following order:
			</Content>
			<div className={styles.postContainer} style={{ marginTop: '3vh' }}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Research Challenge</div>
					<div className={styles.postData}>
						Not all displacement crises are recorded and reported, often
						languishing in the shadows of emergency response and prevention.
						Although humanitarian assistance should be based on needs, some
						crises receive more attention than others. In collaboration with
						universities and think tanks, we will offer research-related
						initiatives to bring our attention to those displaced people whose
						plight did not reach the media or receive public awareness.
						<br /> <br />
						<Link href="/initiatives/research-challenge">
							<a>Learn More ></a>
						</Link>
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="research-challenge" />
				</div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Psychosocial Support</div>
					<div className={styles.postData}>
						Natural and manmade disasters affect displaced women, men, youth and
						children’s feeling of security, hope and stability. Field
						practitioners and humanitarian aid workers often face emotional
						fatigue and seek holistic support to better assist in emergencies.
						The psychological and social aspects are often compromised for both
						the caregivers and those who they provide care for.
						<br /> <br />
						<Link href="/initiatives/psychosocial-support">
							<a>Learn More ></a>
						</Link>
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="psychosocial-support" />
				</div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Virtual Platform</div>
					<div className={styles.postData}>
						There are several online learning opportunities, even mobile apps
						and simulation games, developed for/by refugees. To enhance and
						complement these, we will create a virtual platform and mobile app
						as a safe space for refugees and displaced people to exchange their
						diverse skills, stories, ideas and collaborate together based on
						common similar interests. We would like to combine face-to-face
						training programs, with online knowledge-sharing modules...
						<br /> <br />
						<Link href="/initiatives/virtual-platform">
							<a>Learn More ></a>
						</Link>
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="virtual-platform" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default OurInitiatives;
