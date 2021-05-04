import Link from 'next/link';
import { ReactElement, useState } from 'react';

import numberToRoman from '../../helpers/numberToRoman';
import slugfy from '../../helpers/slugfy';
import { SWMovie } from '../../types/common';
import {
  FilmListContainer,
  FilmCard,
  EpisodeName,
  FilmTitle,
  Button,
  EpisodeNumber,
} from './styles';

interface Props {
  films: SWMovie[];
}

export default function FilmList({ films }: Props): ReactElement {
  const [cardOnHover, setHover] = useState(0);

  return (
    <FilmListContainer>
      <p>
       <b>CLASSIC MOVIES</b> COLLECTION
      </p>

      {
        films.map((movie: SWMovie) => (
          <Link key={movie.episode_id} href ={`/episode/${slugfy(movie.title)}`}>
            <a>
              <FilmCard
                onMouseEnter={() => setHover(movie.episode_id)}
                onMouseLeave={() => setHover(0)}
              >
                <EpisodeName>
                  Episode { numberToRoman(movie.episode_id) }
                </EpisodeName>
                <FilmTitle episode={movie.episode_id}>
                  { movie.title }
                </FilmTitle>
                <Button episode={movie.episode_id} hover={cardOnHover}>
                  Movie Details
                </Button>
                <EpisodeNumber episode={movie.episode_id} hover={cardOnHover}>
                  { numberToRoman(movie.episode_id) }
                </EpisodeNumber>
              </FilmCard>
            </a>
          </Link>
        ))
      }
    </FilmListContainer>
  );
}
