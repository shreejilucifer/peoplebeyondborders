import styles from './lightsection.module.css';

const LightSection = (props) => {
	const { children } = props;
	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default LightSection;
