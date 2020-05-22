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
	Underline,
} from './style';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { useState } from 'react';

const Route = ({ path, text, active }) => (
	<React.Fragment>
		<Link href={path}>
			<Links active={active}>
				<div>{text}</div>
			</Links>
		</Link>
	</React.Fragment>
);

const Brand = () => (
	<BrandContainer>
		<img src="/images/logo.png" alt="People Beyond Borders" />
	</BrandContainer>
);

const Navbar = ({ router }) => {
	const [isOpen, setIsOpen] = useState(false);
	const checkActive = (route) => {
		return router.pathname.includes(route);
	};
	return (
		<Wrapper>
			<Container>
				<Brand />
				<Routes>
					<div></div>
					<Route
						path="/discoverus"
						text="Discover us"
						active={checkActive('/discoverus')}
					/>
					<Route
						path="/ourinitiatives"
						text="Our Initiatives"
						active={checkActive('/ourinitiatives')}
					/>
					<Route
						path="/resourcesandstories"
						text="Resources and Stories"
						active={checkActive('/resourcesandstories')}
					/>
					<Route
						path="/ourteam"
						text="Our Team"
						active={checkActive('/ourteam')}
					/>
					<Route
						path="/connectwithus"
						text="Connect with us"
						active={checkActive('/connectwithus')}
					/>
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

export default withRouter(Navbar);
