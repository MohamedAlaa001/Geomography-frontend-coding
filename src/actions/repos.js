import { GET_REPOS } from './types';
import axios from 'axios';

export const getRepos = (page) => async (dispatch) => {
  // Days * hours * minutes * seconds * milliseconds
  const date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const month = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}`;
  const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  const formattedDate = `${date.getFullYear()}-${month}-${day}`;

  const url = `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&per_page=100${
    page > 1 ? `&page=${page}` : ''
  }`;

  try {
    const res = await axios.get(url);

    dispatch({
      type: GET_REPOS,
      payload: res.data.items,
    });
  } catch (err) {
    console.log(err);
  }
};
