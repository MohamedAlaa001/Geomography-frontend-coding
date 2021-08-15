import { GET_REPOS, SET_PAGE, SET_LIMIT } from '../actions/types';

const initialState = {
  repos: [],
  limit: 30,
  page: 1,
  loading: true,
};

export default function repoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: [...state.repos, ...payload],
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: payload,
      };
    default:
      return state;
  }
}
