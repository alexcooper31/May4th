import styled, { keyframes } from 'styled-components';

const ViewContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const InfoWrapper = styled.div`
  width: calc(100% - 400px);
  padding-left: 40px;
`;

const EpisodeNumber = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
`;

const FilmTitle = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-transform: uppercase;
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const DataPrompt = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const DataInfo = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: white;
`;

const TextCrawl = styled.div`
  width: 700px;
  font-size: 20px;
  line-height: 32px;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const loading = keyframes`
  50% {
    opacity: 0.2;
  }
`;

interface ICoverProps {
  loaded: boolean;
}

const LoadingImage = styled.img`
  width: 360px;
  height: 530px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  animation: ${(props: ICoverProps) => !props.loaded && loading} 2s linear infinite;
`;

export {
  ViewContent,
  InfoWrapper,
  EpisodeNumber,
  FilmTitle,
  TextCrawl,
  DataWrapper,
  DataPrompt,
  DataInfo,
  LoadingImage,
};
