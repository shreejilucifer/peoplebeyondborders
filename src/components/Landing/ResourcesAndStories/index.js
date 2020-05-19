import {
	Wrapper,
	HorizontalCardContainer,
	VerticalCardContainer,
	VerticalCardActual,
	HorizontalCardActual,
	Container,
	Grid,
	Title,
	Column,
	HorizontalCardCountry,
	HorizontalCardLinkbtn,
	HorizontalCardTitle,
	LinkButton,
	VerticalCardCountry,
	VerticalCardLinkbtn,
	VerticalCardTitle,
} from './style';

const HorizontalCard = ({ country, title, link, img }) => (
	<HorizontalCardContainer>
		<HorizontalCardActual style={{ backgroundImage: `url(${img})` }}>
			<div>
				<HorizontalCardCountry>{country}</HorizontalCardCountry>
				<HorizontalCardTitle>{title}</HorizontalCardTitle>
			</div>
			<HorizontalCardLinkbtn>Read More</HorizontalCardLinkbtn>
		</HorizontalCardActual>
	</HorizontalCardContainer>
);

const VerticalCard = ({ country, title, link, img }) => (
	<VerticalCardContainer>
		<VerticalCardActual style={{ backgroundImage: `url(${img})` }}>
			<div>
				<VerticalCardCountry>{country}</VerticalCardCountry>
				<VerticalCardTitle>{title}</VerticalCardTitle>
			</div>
			<VerticalCardLinkbtn>Read More</VerticalCardLinkbtn>
		</VerticalCardActual>
	</VerticalCardContainer>
);

const ResourcesAndStories = () => {
	return (
		<Wrapper>
			<Title>Resources and Stories</Title>
			<Container>
				<Grid>
					<Column>
						<HorizontalCard
							country="Syria"
							img="/images/resources-h-1.png"
							title="Teaching Among Turmoil"
						/>
						<Grid>
							<VerticalCard
								country="Syria"
								title="Little Mischief Maker"
								img="/images/resources-v-1.png"
							/>
							<VerticalCard
								country="Syria"
								title="A Better Future"
								img="/images/resources-v-2.png"
							/>
						</Grid>
					</Column>
					<Column>
						<Grid>
							<VerticalCard
								country="Syria"
								title="Feathered Friends"
								img="/images/resources-v-3.png"
							/>
							<VerticalCard
								country="Syria"
								title="The Power of Chat"
								img="/images/resources-v-4.png"
							/>
						</Grid>
						<HorizontalCard
							country="Syria"
							img="/images/resources-h-2.png"
							title="Rewriting Headlined"
						/>
					</Column>
				</Grid>
				<LinkButton>Go Deeper</LinkButton>
			</Container>
		</Wrapper>
	);
};

export default ResourcesAndStories;
