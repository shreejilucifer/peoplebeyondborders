import styles from './aboutus.module.css';

const GridItem = ({ img, title, numbers }) => (
	<div className={styles.itemContainer}>
		<div className={styles.itemImageContainer}>
			<img src={img} alt="title" />
		</div>
		<div className={styles.itemTitle}>{title}</div>
		<div className={styles.itemNumbers}>{numbers}</div>
	</div>
);
const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>About Us</div>
			<div className={styles.grid}>
				<GridItem
					img="/images/aboutus-2010.png"
					title="DISPLACED IN 2010"
					numbers="43,700,000"
				/>
				<GridItem
					img="/images/aboutus-2015.png"
					title="DISPLACED IN 2015"
					numbers="65,000,000"
				/>
				<GridItem
					img="/images/aboutus-2020.png"
					title="DISPLACED IN 2020"
					numbers="70,754,326"
				/>
			</div>
			<div className={styles.content}>
				People Beyond Borders is run by, for and with displaced communities and
				refugees. That is, people who are forced to flee are active agents
				rather than subjects where we work in collaboration "with" rather than
				"on" them.
			</div>
			<div className={styles.linkbtn}>Discover More</div>
		</div>
	);
};

export default AboutUs;
