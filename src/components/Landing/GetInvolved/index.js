import {
	CardContainer,
	CardTitle,
	Container,
	Title,
	ImageContainer,
	LinksContainer,
	MobileTitle,
	ArrowContainer,
} from './style';

const LinkItem = ({ title, link }) => (
	<CardContainer>
		<CardTitle>{title}</CardTitle>
		<ArrowContainer>></ArrowContainer>
	</CardContainer>
);

const GetInvolved = () => {
	return (
		<React.Fragment>
			<MobileTitle>Get Involved</MobileTitle>
			<Container>
				<ImageContainer>
					<img src="/images/getinvolved-main.png" alt="get involved" />
				</ImageContainer>
				<LinksContainer>
					<Title>Get Involved</Title>
					<LinkItem title="Donation - Invest in Empowerment" />
					<LinkItem title="Volunteer - Contribute your Skills" />
					<LinkItem title="Design your own fundraiser" />
					<LinkItem title="Partner with us" />
				</LinksContainer>
			</Container>
		</React.Fragment>
	);
};

export default GetInvolved;
