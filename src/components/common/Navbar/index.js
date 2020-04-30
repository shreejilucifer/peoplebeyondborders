import styles from './navbar.module.css';
import Link from 'next/link';

const Route = ({ path, text }) => (
	<Link href={path}>
		<a className={styles.links}>{text}</a>
	</Link>
);

const Brand = () => (
	<div className={styles.brand}>
		<img alt="People Beyond Borders" />
	</div>
);

const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Brand />
				<div className={styles.routes}>
					<Route path="/discoverus" text="Discover us" />
					<Route path="/ourinitiatives" text="Our Initiatives" />
					<Route path="/resourcesandstories" text="Resources and Stories" />
					<Route path="/ourteam" text="Our Team" />
					<Route path="/connectwithus" text="Connect with us" />
					<div className={styles.linksbtn}>Get Involved</div>
				</div>
			</div>
			<div className={styles.mobileContainer}>Hello Mobile Nav</div>
		</div>
	);
};

export default Navbar;
