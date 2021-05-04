import { SWMovie } from '../types/common';

const slugfy = (title: string): string => title.split('').reduce(
  (result: string[], char: string) => {
    if (char === ' ') {
      return [...result, '-'];
    }

    if (result.length === 0) {
      return [char.toLowerCase()];
    }

    return [...result, char.toLowerCase()];
  },
  [],
).join('');

const getFilmBySlug = (slug: string, films: SWMovie[]): SWMovie | null => {
  const found = films.find((film) => slugfy(film.title) === slug);
  return found ?? null;
};

export default slugfy;

export {
  getFilmBySlug,
};
