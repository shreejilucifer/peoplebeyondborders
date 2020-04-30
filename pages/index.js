import styles from '../src/styles/indexpage.module.css';

import Navbar from '../src/components/Navbar';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
		</div>
	);
};

export default IndexPage;
