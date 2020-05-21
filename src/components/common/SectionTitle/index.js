import styled from 'styled-components';

const Title = styled.div`
	width: 100%;
	font-size: var(--titleSize);
	font-family: var(--titleFont);
	color: ${(props) => props.color};
	text-align: center;
`;

const SectionTitle = ({ children, color }) => {
	return <Title color={color}>{children}</Title>;
};

export default SectionTitle;
