interface PaginatedResults<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

interface SWMovie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  characters: string[];
  url: string;
  release_date: Date | string;
  edited: Date | string;
  created: Date | string;
}
interface Cacher {
  films: SWMovie[];
}

interface CacheProps {
  cache: Cacher;
  setCache: (state: Cacher) => void;
}

export type {
  SWMovie,
  PaginatedResults,
  Cacher,
  CacheProps,
};
