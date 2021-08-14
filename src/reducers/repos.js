import { GET_REPOS } from '../actions/types';

const initialState = {
  repos: [],
  loading: true,
};

export default function repoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: payload,
      };
    default:
      return state;
  }
}
