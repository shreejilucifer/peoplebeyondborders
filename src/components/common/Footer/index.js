import styles from './footer.module.css';
import Link from 'next/link';

const Route = ({ path, text }) => (
	<Link href={path}>
		<a className={styles.links}>{text}</a>
	</Link>
);

const Footer = () => {
	return (
		<div className={styles.container}>
			<img src="/clips/upperclip.svg" className={styles.upperclip} />
			<div className={styles.content}>
				<div className={styles.brand}>
					<img alt="people beyond borders" />
				</div>
				<div className={styles.routes}>
					<Route path="/discoverus" text="Discover us" />
					<Route path="/ourinitiatives" text="Our Initiatives" />
					<Route path="/resourcesandstories" text="Resources and Stories" />
					<Route path="/ourteam" text="Our Team" />
					<Route path="/connectwithus" text="Connect with us" />
				</div>
				<div className={styles.social}>
					<div className={styles.icons}>
						<img alt="social" />
					</div>
					<div className={styles.icons}>
						<img alt="social" />
					</div>
					<div className={styles.icons}>
						<img alt="social" />
					</div>
					<div className={styles.icons}>
						<img alt="social" />
					</div>
				</div>
				<div className={styles.copyright}>
					© {new Date().getFullYear()} People Beyond Borders All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
