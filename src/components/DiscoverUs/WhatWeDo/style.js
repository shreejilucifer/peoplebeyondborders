import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
	max-width: 1440px;
`;

export const SubTitle = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	font-family: 'Muli-SemiBold';
	font-size: 2em;
	line-height: 60px;
	text-align: center;
	color: var(--primary);
`;

export const Content = styled.div`
	width: 91%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	font-family: 'Muli-Regular';
	font-size: 1.25em;
	line-height: 1.2em;
	text-align: center;
`;

export const Highlight = styled.span`
	font-family: 'Muli-SemiBold';
	color: var(--highlight);
`;
