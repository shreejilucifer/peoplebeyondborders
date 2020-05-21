import {
	Container,
	Content,
	Highlight,
	PostContainer,
	PostContent,
	PostImage,
	PostTitle,
	PostData,
} from './style';
import SectionTitle from '../../common/SectionTitle';

const HowWeCreateImpact = () => {
	return (
		<Container>
			<SectionTitle color="black">How we create impact</SectionTitle>
			<Content>
				People Beyond Borders is a bridge, co-creating safe spaces and
				opportunities for displaced communities and refugees to connect with
				each other as well as build on resources and support systems. We work to
				find contextual and durable solutions to tackle the root causes of some
				of the world’s biggest challenges. We believe in the power of coming
				together, similar to how seemingly small, individual pieces of{' '}
				<Highlight>puzzle</Highlight> fit to show us the bigger picture.
			</Content>
			{data.map(({ title, content, imgurl }, i) => (
				<PostContainer key={i}>
					<PostContent>
						<PostTitle>{title}</PostTitle>
						<PostData>{content}</PostData>
					</PostContent>
					<PostImage>
						<img src={imgurl} alt={title} />
					</PostImage>
				</PostContainer>
			))}
		</Container>
	);
};

export default HowWeCreateImpact;

const data = [
	{
		title: 'Inclusive Practices',
		content: `Displaced people and refugees are often not included “in” developing
						humanitarian and peacebuilding programs planned “for” them. We
						believe that those closest to the grassroot issues are best equipped
						to catalyze change. Our programs are designed, implemented and
						evaluated by those who live it! They are most aware of their own
						needs, adaptive capacities, culturally- appropriate benchmarks,
						limitations and the power dynamics in their societies. Our intention
						is to provide different tools, resources and frameworks to foster
						local agency, accountability, community ownership and social
						cohesion in different initiatives and programs.`,
		imgurl: '/images/inclusive-practices.jpg',
	},
	{
		title: 'Creative Process',
		content: `We bring in creative processes through
expressive arts to facilitate a strong
foundation for safe spaces and enhance
psychosocial support. This encompasses all
art forms including visual art, theatre, music,
movement, photography, creative writing and
nature-based art therapy. We also bring in
fun cooking sessions, and cultural
activities. There is growing evidence
combined from over 900 publications and
organizations, including the World Health
Organization (WHO) that art is a powerful
prescription. WHO reported how “Art
Wellness” has moved from sidelines to
center-stage, while bringing culture and
social sectors together to treat specific health
conditions. We believe that creativity can
spark honest conversations and reflections
not just between people but also within
ourselves. With this shared sense of
playfulness and trust, we are able to unfold
through multilayered stories, meaningful
connections and personal growth through
arts.`,
		imgurl: '/images/creative-process.jpg',
	},
];
