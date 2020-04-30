import styles from './darksection.module.css';

const DarkSection = (props) => {
	const { children } = props;
	return (
		<div className={styles.container}>
			<img src="/clips/upperclip.svg" className={styles.upperclip} />
			<div className={styles.content}>{children}</div>
			<img src="/clips/belowclip.svg" className={styles.belowclip} />
		</div>
	);
};

export default DarkSection;
