import styles from './howwecreateimpact.module.css';
import { Title, Content } from '../common/Typography';

const HowWeCreateImpact = () => {
	return (
		<React.Fragment>
			<Title>How We Create Impact</Title>
			<Content>
				People Beyond Borders is a bridge, co-creating safe spaces and
				opportunities for displaced communities and refugees to connect with
				each other as well as build on resources and support systems. We work to
				find contextual and durable solutions to tackle the root causes of some
				of the world’s biggest challenges. We believe in the power of coming
				together, similar to how seemingly small, individual pieces of puzzle
				fit to show us the bigger picture.
			</Content>
			<div className={styles.imageContainer}>
				<img alt="how-we-create-impact" />
			</div>
			<div className={styles.postContainer}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Inclusive Practices</div>
					<div className={styles.postData}>
						Displaced people and refugees are often not included “in” developing
						humanitarian and peacebuilding programs planned “for” them. We
						believe that those closest to the grassroot issues are best equipped
						to catalyze change. Our programs are designed, implemented and
						evaluated by those who live it! They are most aware of their own
						needs, adaptive capacities, culturally- appropriate benchmarks,
						limitations and the power dynamics in their societies. Our intention
						is to provide different tools, resources and frameworks to foster
						local agency, accountability, community ownership and social
						cohesion in different initiatives and programs.
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="inclusive-practices" />
				</div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Inclusive Practices</div>
					<div className={styles.postData}>
						Displaced people and refugees are often not included “in” developing
						humanitarian and peacebuilding programs planned “for” them. We
						believe that those closest to the grassroot issues are best equipped
						to catalyze change. Our programs are designed, implemented and
						evaluated by those who live it! They are most aware of their own
						needs, adaptive capacities, culturally- appropriate benchmarks,
						limitations and the power dynamics in their societies. Our intention
						is to provide different tools, resources and frameworks to foster
						local agency, accountability, community ownership and social
						cohesion in different initiatives and programs.
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="inclusive-practices" />
				</div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.postContent}>
					<div className={styles.postTitle}>Inclusive Practices</div>
					<div className={styles.postData}>
						Displaced people and refugees are often not included “in” developing
						humanitarian and peacebuilding programs planned “for” them. We
						believe that those closest to the grassroot issues are best equipped
						to catalyze change. Our programs are designed, implemented and
						evaluated by those who live it! They are most aware of their own
						needs, adaptive capacities, culturally- appropriate benchmarks,
						limitations and the power dynamics in their societies. Our intention
						is to provide different tools, resources and frameworks to foster
						local agency, accountability, community ownership and social
						cohesion in different initiatives and programs.
					</div>
				</div>
				<div className={styles.postImage}>
					<img alt="inclusive-practices" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default HowWeCreateImpact;
