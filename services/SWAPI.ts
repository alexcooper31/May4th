import { parse, parseISO } from 'date-fns';

import type { SWMovie, PaginatedResults } from '../types/common';

const BASE_URL = 'https://swapi.dev/api';

const mapData = (movie: SWMovie): SWMovie => ({
  ...movie,
  release_date: parse(movie.release_date as string, 'yyyy-MM-dd', new Date()),
  created: parseISO(movie.created as string),
  edited: parseISO(movie.edited as string),
});
const SWAPI = {
  async getFilms(): Promise<PaginatedResults<SWMovie>> {
    const response = await fetch(`${BASE_URL}/films/`);
    return response.json();
  },

  async getFilm(id: number): Promise<SWMovie> {
    const response = await fetch(`${BASE_URL}/filmes/${id}`);
    return response.json();
  },
};

export default SWAPI;

export { mapData };
