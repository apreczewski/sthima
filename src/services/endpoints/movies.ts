/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api, { CancelToken } from '../api';

interface MovieData{
  movieName?: string
  page?: number
}

export const getMovieByName = () => {
  const source = CancelToken.source();

  function apiCall({ movieName, page }: MovieData) {
    return api.get(`/?apikey=925eba28&s=${movieName}&page=${page}`, {
      cancelToken: source.token,
    });
  }

  return { source, apiCall };
};
