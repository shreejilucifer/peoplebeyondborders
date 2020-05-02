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
			<div className={styles.content}>
				<div className={styles.brand}>
					<img src="/images/logo.png" alt="people beyond borders" />
				</div>
				<div className={styles.routes}>
					<Route path="/discoverus" text="Discover us" />
					<Route path="/ourinitiatives" text="Our Initiatives" />
					<Route path="/resourcesandstories" text="Resources and Stories" />
					<Route path="/ourteam" text="Our Team" />
					<Route path="/connectwithus" text="Connect with us" />
				</div>
				<div className={styles.social}>
					<a
						className={styles.icons}
						href="https://facebook.com/"
						target="_blank"
					>
						<img alt="social" src="/images/facebook.png" />
					</a>
					<a
						className={styles.icons}
						href="https://instagram.com/"
						target="_blank"
					>
						<img alt="social" src="/images/instagram.png" />
					</a>
					<a
						className={styles.icons}
						href="https://youtube.com/"
						target="_blank"
					>
						<img alt="social" src="/images/youtube.png" />
					</a>
					<a
						className={styles.icons}
						href="https://linkedin.com/"
						target="_blank"
					>
						<img alt="social" src="/images/linkedin.png" />
					</a>
				</div>
				<div className={styles.copyright}>
					© {new Date().getFullYear()} People Beyond Borders All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
