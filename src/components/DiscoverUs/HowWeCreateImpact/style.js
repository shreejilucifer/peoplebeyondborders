import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 40px;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 91%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	font-family: 'Muli-Regular';
	font-size: 1.3em;
	line-height: 1.3em;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Highlight = styled.span`
	font-family: 'Muli-SemiBold';
	color: var(--highlight);
`;

export const PostContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;

	&:nth-child(even) {
		flex-direction: row-reverse;
	}
`;

export const PostContent = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const PostTitle = styled.div`
	font-family: 'Muli-SemiBold';
	font-size: 2em;
	font-weight: 600;
	line-height: 45px;
	text-align: left;
`;

export const PostImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50%;
	text-align: center;
	& > img {
		width: 85%;
	}
`;

export const PostData = styled.div`
	width: 90%;
	margin-top: 15px;
	font-family: 'Muli-Regular';
	font-size: 1.3em;
	line-height: 1.3;
	text-align: justify;
`;

export const SectionImage = styled.img`
	width: 40%;
	align-self: center;
	margin-left: 100px;
	margin-top: 80px;
`;
