import {
  IS_FETCHING_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../actions';

export function isFetchingPost(state = false, action) {
  switch (action.type) {
      case IS_FETCHING_POST:
        return action.isFetchingPost;
      default:
        return state;
  }
}

export function post(state = {}, action) {
  switch (action.type) {
      case FETCH_POST_SUCCESS:
        return action.post;
      default:
        return state;
  }
}

export function fetchPostFailure(state = false, action) {
  switch (action.type) {
      case FETCH_POST_FAILURE:
        return action.fetchPostFailure;
      default:
        return state;
  }
}
