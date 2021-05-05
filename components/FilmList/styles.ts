import styled from 'styled-components';

const FilmListContainer = styled.div`
  font-weight: 400;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: transparent;

  p {
    font-size: 32px;
    width: 100%;
    text-align: center;
    padding: 0 0 30px;
    user-select: none;

    @media (max-width: 768px) {
      font-size: 28px;
      margin: 0 0 10px;
    }
  }
`;

interface ICardProps {
  episode?: number;
  hover?: number;
}

const FilmCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  margin: 0 10px 20px;
  padding: 30px;
  width: 300px;
  height: 160px;
  display: flex;
  flex-direction: column;
  user-select: none;
  justify-content: space-between;
  overflow: hidden;
  transition: background-color 0.5s;
  cursor: pointer;

  @media (max-width: 380px) {
    padding: 20px;
    width: 280px;
    height: 140px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const EpisodeName = styled.div`
  font-size: 12px;
`;

const FilmTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  width: ${(props: ICardProps) => (props.episode! % 2 !== 0 ? '200px' : '160px')};

  @media (max-width: 380px) {
    font-size: 24px;
    width: ${(props: ICardProps) => (props.episode! % 2 !== 0 ? '180px' : '140px')};
  }
`;

const Button = styled.div`
  font-size: 12px;
  padding: 15px 40px;
  border-radius: 5px;
  border: 1.5px solid white;
  width: fit-content;
  background-color: ${(props: ICardProps) => (props.hover !== props.episode ? 'transparent' : 'white')};
  color: ${(props: ICardProps) => (props.hover !== props.episode ? 'white' : ({ theme }) => theme.colors.blue)};
  transition: color 0.5s, background-color 0.5s;

  @media (max-width: 380px) {
    padding: 10px 30px;
  }
`;

const romanPosition = (value: number): string => {
  switch (value) {
    case 1: return '30px';
    case 2: return '0px';
    case 5: return '-20px';
    default: return '-30px';
  }
};

const EpisodeNumber = styled.div`
  position: absolute;
  font-size: 180px;
  font-weight: 700;
  color: ${(props: ICardProps) => (props.hover !== props.episode ? ({ theme }) => theme.colors.darkGray : ({ theme }) => theme.colors.blue)};
  text-shadow:
    -2px 0 0 ${({ theme }) => theme.colors.lightGray},
    2px 0 0 ${({ theme }) => theme.colors.lightGray},
    -2px -2px 0 ${({ theme }) => theme.colors.lightGray},  
    2px -2px 0 ${({ theme }) => theme.colors.lightGray},
    -2px 2px 0 ${({ theme }) => theme.colors.lightGray},
    2px 2px 0 ${({ theme }) => theme.colors.lightGray};
    opacity: 0.3;
    right: ${(props: ICardProps) => romanPosition(props.episode ?? 1)};
    top: 0px;
    transition: color 0.5s;

    @media (max-width: 380px) {
      font-size: 160px;
    }
  `;

export {
  FilmListContainer,
  FilmCard,
  EpisodeName,
  FilmTitle,
  Button,
  EpisodeNumber,
};
