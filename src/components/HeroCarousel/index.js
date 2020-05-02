import styles from './herocarousel.module.css';

const HeroCarousel = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					Empowering displaced communities & refugees - is our call to action.
				</div>
				<div className={styles.data}>
					We aim to transform the way the displaced communities and refugees
					connect with each other as well as with the world around them.
				</div>
				<div className={styles.learnmore}>Learn more</div>
			</div>
			<img src="/images/banner.png" alt="banner" />
		</div>
	);
};

export default HeroCarousel;
