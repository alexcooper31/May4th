import { ReactElement, useState } from 'react';
import { format } from 'date-fns';

import { SWMovie } from '../../types/common';
import CastData from './components/Data';
import numberToRoman from '../../helpers/numberToRoman';
import {
  ViewContent,
  InfoWrapper,
  EpisodeNumber,
  FilmTitle,
  TextCrawl,
  DataWrapper,
  LoadingImage,
} from './styles';

interface Props {
  film: SWMovie;
}

export default function FilmView({ film }: Props): ReactElement {
  const [loaded, setLoaded] = useState(false);

  return (
    <ViewContent>
      <LoadingImage
        src={`/images/${film.episode_id}.jpg`}
        alt="Movie Poster"
        loaded={loaded}
        onLoad={() => setLoaded(true)}
      />

      <InfoWrapper>
        <EpisodeNumber>
          Episode { numberToRoman(film.episode_id) }
        </EpisodeNumber>
        <FilmTitle>
          { film.title }
        </FilmTitle>
        <DataWrapper>
          <CastData prompt="Director:" info={film.director} />
          <CastData prompt="Producer:" info={film.producer} />
          <CastData prompt="Release Date:" info={format(film.release_date as Date, 'MMM dd, yyyy')} />
        </DataWrapper>
        <TextCrawl>
          { film.opening_crawl }
        </TextCrawl>
      </InfoWrapper>
    </ViewContent>
  );
}
