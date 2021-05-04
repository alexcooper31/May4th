import { ReactElement, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import FilmList from '../components/FilmList';
import SWAPI, { mapData } from '../services/SWAPI';
import { CacheProps, SWMovie } from '../types/common';
import MainLayout from '../components/MainLayout';

export const getStaticProps: GetStaticProps<{ films: SWMovie[]; }> = async () => ({
  props: {
    films: (await SWAPI.getFilms()).results,
  },
});

export default function Home(
  { films, setCache, cache }: InferGetStaticPropsType<typeof getStaticProps> & CacheProps,
): ReactElement {
  useEffect(() => {
    if (cache.films?.length === 0) {
      setCache({
        films: films.map(mapData),
      });
    }
  }, [films, cache, setCache]);

  return (
    <MainLayout>
      <FilmList
        films={films}
      />
    </MainLayout>
  );
}
