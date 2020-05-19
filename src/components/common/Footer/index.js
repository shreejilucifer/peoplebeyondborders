import {
	Brand,
	Container,
	Links,
	Content,
	Copyright,
	Routes,
	Social,
	Icons,
} from './style';
import Link from 'next/link';

const Route = ({ path, text }) => (
	<Link href={path}>
		<Links>{text}</Links>
	</Link>
);

const Footer = () => {
	return (
		<Container>
			<Content>
				<Brand>
					<img src="/images/logo.png" alt="people beyond borders" />
				</Brand>
				<Routes>
					<Route path="/discoverus" text="Discover us" />
					<Route path="/ourinitiatives" text="Our Initiatives" />
					<Route path="/resourcesandstories" text="Resources and Stories" />
					<Route path="/ourteam" text="Our Team" />
					<Route path="/connectwithus" text="Connect with us" />
				</Routes>
				<Social>
					<Icons href="https://facebook.com/" target="_blank">
						<img alt="social" src="/images/facebook.png" />
					</Icons>
					<Icons href="https://instagram.com/" target="_blank">
						<img alt="social" src="/images/instagram.png" />
					</Icons>
					<Icons href="https://youtube.com/" target="_blank">
						<img alt="social" src="/images/youtube.png" />
					</Icons>
					<Icons href="https://linkedin.com/" target="_blank">
						<img alt="social" src="/images/linkedin.png" />
					</Icons>
				</Social>
				<Copyright>
					© {new Date().getFullYear()} People Beyond Borders All rights reserved
				</Copyright>
			</Content>
		</Container>
	);
};

export default Footer;
