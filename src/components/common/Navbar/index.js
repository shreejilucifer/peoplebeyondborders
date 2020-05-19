import {
	Wrapper,
	Container,
	BrandContainer,
	Routes,
	Links,
	LinksButton,
	MobileContainer,
	Hamburger,
	DrawerContainer,
} from './style';
import Link from 'next/link';
import { useState } from 'react';

const Route = ({ path, text }) => (
	<Link href={path}>
		<Links>{text}</Links>
	</Link>
);

const Brand = () => (
	<BrandContainer>
		<img src="/images/logo.png" alt="People Beyond Borders" />
	</BrandContainer>
);

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Wrapper>
			<Container>
				<Brand />
				<Routes>
					<Route path="/discoverus" text="Discover us" />
					<Route path="/ourinitiatives" text="Our Initiatives" />
					<Route path="/resourcesandstories" text="Resources and Stories" />
					<Route path="/ourteam" text="Our Team" />
					<Route path="/connectwithus" text="Connect with us" />
					<LinksButton>Get Involved</LinksButton>
				</Routes>
			</Container>
			<MobileContainer>
				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					<div></div>
					<div></div>
					<div></div>
				</Hamburger>
				{isOpen === true ? (
					<DrawerContainer>
						<div>
							<Brand />
							<Hamburger onClick={() => setIsOpen(!isOpen)}>
								<div></div>
								<div></div>
								<div></div>
							</Hamburger>
						</div>
						<Route path="/discoverus" text="Discover us" />
						<Route path="/ourinitiatives" text="Our Initiatives" />
						<Route path="/resourcesandstories" text="Resources and Stories" />
						<Route path="/ourteam" text="Our Team" />
						<Route path="/connectwithus" text="Connect with us" />
						<LinksButton>Get Involved</LinksButton>
					</DrawerContainer>
				) : null}
			</MobileContainer>
		</Wrapper>
	);
};

export default Navbar;
