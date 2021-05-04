import { useRouter } from 'next/router';
import {
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Head from 'next/head';

import FilmView from '../../components/FilmView';
import { getFilmBySlug } from '../../helpers/slugfy';
import SWAPI, { mapData } from '../../services/SWAPI';
import { CacheProps, SWMovie } from '../../types/common';
import MainLayout from '../../components/MainLayout';

/**
 * Just a small hack to get the URL image for OG Tags
 */
const imgMapper: { [index: number]: string; } = {
  1: 'https://i.ibb.co/d7R8xc4/1.jpg',
  2: 'https://i.ibb.co/fH8zYr7/2.jpg',
  3: 'https://i.ibb.co/nwS5RcV/3.jpg',
  4: 'https://i.ibb.co/9sWDcfg/4.jpg',
  5: 'https://i.ibb.co/Cb7ZwBy/5.jpg',
  6: 'https://i.ibb.co/NKCzDbv/6.jpg',
};

const EpisodePage = ({ cache, setCache }: CacheProps): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState<SWMovie | null>(null);
  const router = useRouter();
  const { episode } = router.query;

  const fetchFilms = useCallback(() => {
    SWAPI.getFilms()
      .then((response) => {
        const mapped = response.results.map(mapData);

        setCache({
          films: mapped,
        });

        setFilm(getFilmBySlug(episode as string, mapped));

        setLoading(false);
      });
  }, [episode, setCache]);

  useEffect(() => {
    if (cache.films?.length === 0) {
      setLoading(true);
      fetchFilms();
    } else {
      setFilm(getFilmBySlug(episode as string, cache.films));
      setLoading(false);
    }
  }, [cache, fetchFilms, setFilm, episode]);

  if (loading) {
    return <p>LOADING</p>;
  }

  return (
    <MainLayout>
      <Head>
        {
          film
            ? (
              <>
                <title key="page-title">{ film.title }</title>
                <meta property="og:description"
                  content={film.opening_crawl}
                  key="og-desc"
                />
                <meta property="og:title" content={film.title} key="og-title" />
                <meta property="og:image" content={imgMapper[film.episode_id]} />
                <meta property="og:image:type" content="image/jpeg" />
              </>
            )
            : (
              <title key="page-title"> </title>
            )
        }
      </Head>

      { film ? <FilmView film={film} /> : <p>Movie not found</p> }
    </MainLayout>
  );
};

export default EpisodePage;
