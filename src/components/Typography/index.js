import styles from './typography.module.css';

const Title = (props) => {
	return (
		<div className={styles.title} {...props}>
			{props.children}
		</div>
	);
};

const SubTitle = (props) => {
	return (
		<div className={styles.subtitle} {...props}>
			{props.children}
		</div>
	);
};

const Content = (props) => {
	return (
		<div className={styles.content} {...props}>
			{props.children}
		</div>
	);
};

export { Title, SubTitle, Content };
