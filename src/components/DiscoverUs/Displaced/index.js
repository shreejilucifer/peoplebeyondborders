import {
	Title,
	Container,
	Content,
	Data,
	TypesContainer,
	Type,
	TypeCaption,
	Inspire,
	Highlight,
	ArrowContainer,
} from './style';
import SectionTitle from '../../common/SectionTitle';

const TypeItem = ({ caption, image }) => (
	<Type>
		<img alt={caption} src={image} />
		<TypeCaption>{caption}</TypeCaption>
	</Type>
);

const Displaced = () => {
	return (
		<Container>
			<Content>
				<Title>Over half of all displaced people are children </Title>
				<TypesContainer>
					<TypeItem
						caption="Separated from Families"
						image="/images/separated-from-families.png"
					/>
					<TypeItem
						caption="Risk of Exploitation"
						image="/images/risk-of-exploitation.png"
					/>
					<TypeItem caption="Trafficking" image="/images/trafficking.png" />
					<TypeItem caption="Smuggling" image="/images/smuggling.png" />
					<TypeItem caption="Neglect" image="/images/neglect.png" />
					<TypeItem
						caption="Militant Recruitment"
						image="/images/militant-recruitment.png"
					/>
				</TypesContainer>
				<Data>
					Either most are internally displaced persons (IDPs) in their home
					countries or about 80% of those displaced tend to seek refuge in their
					neighboring countries. Overburdened developing countries face the
					repercussions when political authorities shut doors for displaced
					persons. In such situations, it is underestimated how local people
					support the displaced. Often, it is the vulnerable, disad-vantaged
					communities as well as those who themselves might be IDPs in their
					country that end up hosting the refugees and displaced people. Hosting
					isn’t limited to providing resources but also includes being a
					liaison, creating support structures, sharing livelihood opportunities
					and enhancing the overall wellbeing. It is powerful to see how humans
					empower humans!
					<br />
					<br />
					Why does any of this matter? It matters because empathy, resilience,
					care, hope and strength drive us even when at times it might feel that
					we are operating from the lack of it. It matters because we have the
					agency to transform our own stories, narratives, spaces and empower
					those around us.
				</Data>
				<Inspire>
					Want to inspire lives? &nbsp;<Highlight>Get Involved</Highlight>&nbsp;
					<ArrowContainer>></ArrowContainer>
				</Inspire>
			</Content>
		</Container>
	);
};

export default Displaced;
