import styles from './resourcesandstories.module.css';

const HorizontalCard = ({ country, title, link, img }) => (
	<div className={styles.horizontalCardContainer}>
		<div
			className={styles.horizontalCard}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div>
				<div className={styles.horizontalCardCountry}>{country}</div>
				<div className={styles.horizontalCardTitle}>{title}</div>
			</div>
			<div className={styles.horizontalCardLinkbtn}>Read More</div>
		</div>
	</div>
);

const VerticalCard = ({ country, title, link, img }) => (
	<div className={styles.verticalCardContainer}>
		<div
			className={styles.verticalCard}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div>
				<div className={styles.verticalCardCountry}>{country}</div>
				<div className={styles.verticalCardTitle}>{title}</div>
			</div>
			<div className={styles.verticalCardLinkbtn}>Read More</div>
		</div>
	</div>
);

const ResourcesAndStories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Resources and Stories</div>
			<div className={styles.grid}>
				<div className={styles.column}>
					<HorizontalCard
						country="Syria"
						img="/images/resources-h-1.png"
						title="Teaching Among Turmoil"
					/>
					<div className={styles.grid}>
						<VerticalCard
							country="Syria"
							title="Little Mischief Maker"
							img="/images/resources-v-1.png"
						/>
						<VerticalCard
							country="Syria"
							title="A Better Future"
							img="/images/resources-v-2.png"
						/>
					</div>
				</div>
				<div className={styles.column}>
					<div className={styles.grid}>
						<VerticalCard
							country="Syria"
							title="Feathered Friends"
							img="/images/resources-v-3.png"
						/>
						<VerticalCard
							country="Syria"
							title="The Power of Chat"
							img="/images/resources-v-4.png"
						/>
					</div>
					<HorizontalCard
						country="Syria"
						img="/images/resources-h-2.png"
						title="Rewriting Headlined"
					/>
				</div>
			</div>
			<div className={styles.linkbtn}>Go Deeper</div>
		</div>
	);
};

export default ResourcesAndStories;
