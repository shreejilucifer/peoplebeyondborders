import {
	Container,
	Content,
	Highlight,
	PostContainer,
	PostContent,
	PostImage,
	PostTitle,
	PostData,
	SectionImage,
} from './style';
import SectionTitle from '../../common/SectionTitle';

const HowWeCreateImpact = () => {
	return (
		<Container>
			<SectionTitle color="black">How we create impact</SectionTitle>
			<Content>
				<span>
					People Beyond Borders is a bridge, co-creating safe spaces and
					opportunities for displaced communities and refugees to connect with
					each other as well as build on resources and support systems. We work
					to find contextual and durable solutions to tackle the root causes of
					some of the world’s biggest challenges. We believe in the power of
					coming together, similar to how seemingly small, individual pieces of{' '}
					<Highlight>puzzle</Highlight> fit to show us the bigger picture.
				</span>
				<SectionImage src="/images/how-we-create-impact.png" />
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
	{
		title: 'Participatory Action Research',
		content: `Sometimes what people think or say is very
different from what they do. How do
we approach their doing? All of our work is
rooted in Participatory Action Research
(PAR), so that our action plans are based on
the real-life actions of the displaced people
we work with. For us, research is dynamic
rather than static where all involved
stakeholders engage as co-researchers
constantly transforming their own spaces by
bringing knowledge alive! PAR sets out to be
participatory based on the perspective that
“knowledge are plural”

, which further

challenges some of the assumptions about
displacement/refugee homogeneity in
conventional studies. While many tend to
consider displaced people as a homogenous
entity, our research articulates that the
displaced are internally diverse and there are
power dynamics between them that shape
their intra-social cohesion. We develop our
initiatives to channelize this diversity and
plural voices in innovative ways.`,
		imgurl: '/images/participatory-action-research.png',
	},
];
