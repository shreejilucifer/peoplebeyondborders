import styles from './ourintiativeslanding.module.css';

const Card = ({ img, title, content }) => (
	<div className={styles.cardContainer}>
		<div className={styles.cardImage}>
			<img src={img} alt={title} />
		</div>
		<div className={styles.cardTitle}>{title}</div>
		<div className={styles.underline}></div>
		<div className={styles.cardContent}>{content}</div>
	</div>
);

const OurInitiatives = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Our Initiatives</div>
			<div className={styles.grid}>
				<Card
					img="/images/our-initiative-1.png"
					title="Research Challenge"
					content="Not all displacement crises are recorded and reported, often languishing in the shadows emergency response and prevention…"
				/>
				<Card
					img="/images/our-initiative-2.png"
					title="Psychosocial Support"
					content="Natural and manmade disasters affect displaced women, youth and children’s feeling of security, hope and stability…"
				/>
				<Card
					img="/images/our-initiative-3.png"
					title="Virtual Platform"
					content="There are several online learning opportunities, even mobile apps and simulation games, developed for/by…"
				/>
			</div>
		</div>
	);
};

export default OurInitiatives;
