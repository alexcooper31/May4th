import styled, { keyframes } from 'styled-components';

const ViewContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const InfoWrapper = styled.div`
  width: calc(100% - 400px);
  padding-left: 40px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px;
  }
`;

const EpisodeNumber = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 10px;
    text-align: center;
  }
`;

const FilmTitle = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 48px;
    text-align: center;
  }
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
    flex-wrap: wrap;

    div {
      margin-bottom: 6px;
      width: 100% !important;
    }
  }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
  }
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
