import styles from './getinvolved.module.css';

const LinkItem = ({ title, link }) => (
	<div className={styles.cardContainer}>
		<div className={styles.cardTitle}>{title}</div>
		<div className={styles.arrowContainer}>></div>
	</div>
);

const GetInvolved = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mobiletitle}>Get Involved</div>
			<div className={styles.imageContainer}>
				<img src="/images/getinvolved-main.png" alt="get involved" />
			</div>
			<div className={styles.linksContainer}>
				<div className={styles.title}>Get Involved</div>
				<LinkItem title="Donation - Invest in Empowerment" />
				<LinkItem title="Volunteer - Contribute your Skills" />
				<LinkItem title="Design your own fundraiser" />
				<LinkItem title="Partner with us" />
			</div>
		</div>
	);
};

export default GetInvolved;
