import { Content, Title, Data, LearnMore } from './style';

const IndexContent = ({ visible }) => {
	return (
		<Content style={!visible ? { visibility: 'hidden' } : {}}>
			<Title>
				Empowering displaced communities & refugees - is our call to action.
			</Title>
			<Data>
				We aim to transform the way the displaced communities and refugees
				connect with each other as well as with the world around them.
			</Data>
			<LearnMore>Learn more</LearnMore>
		</Content>
	);
};

export { IndexContent };
