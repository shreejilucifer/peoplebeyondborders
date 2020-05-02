import styles from './navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Route = ({ path, text }) => (
	<Link href={path}>
		<a className={styles.links}>{text}</a>
	</Link>
);

const Brand = () => (
	<div className={styles.brand}>
		<img src="/images/logo.png" alt="People Beyond Borders" />
	</div>
);

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
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
			<div className={styles.mobileContainer}>
				<div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				{isOpen === true ? (
					<div className={styles.drawerContainer}>
						<Route path="/discoverus" text="Discover us" />
						<Route path="/ourinitiatives" text="Our Initiatives" />
						<Route path="/resourcesandstories" text="Resources and Stories" />
						<Route path="/ourteam" text="Our Team" />
						<Route path="/connectwithus" text="Connect with us" />
						<div className={styles.linksbtn}>Get Involved</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
