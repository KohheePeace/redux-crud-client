import {
  FETCH_POSTS_SUCCESS,
  IS_FETCHING_POSTS,
  FETCH_POSTS_FAILURE,
  ADD_POST_SUCCESS,
  IS_ADDING_POST,
  ADD_POST_FAILURE,
  DELETE_POST_SUCCESS,
  UPDATE_POST_SUCCESS
} from '../actions'

export function isFetchingPosts(state = false, action) {
  switch (action.type) {
      case IS_FETCHING_POSTS:
        return action.isFetchingPosts;
      default:
        return state;
  }
}

export function fetchPostsFailure(state = false, action) {
  switch (action.type) {
      case FETCH_POSTS_FAILURE:
        return action.fetchPostsFailure;
      default:
        return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
      case FETCH_POSTS_SUCCESS: //このactionがdispatchされたら、action.postsを返すよ~
        return action.posts
      case ADD_POST_SUCCESS:
        return [action.post, ...state]; // ADD_POST_SUCCESSアクションがdispatchされたら、action.postをposts stateの先頭に追加した配列を返すよ~
      case DELETE_POST_SUCCESS:
        return state.filter(post => post.id !== action.id);
      case UPDATE_POST_SUCCESS: // https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456
        return state.map((post) => {
          if (post.id === action.post.id) {
            return {
              ...post,
              ...action.post
            }
          } else return post;
        })
      default: //なにもされてないときは、デフォルトの[]を返すよ~
        return state;
  }
}

export function isAddingPost(state = false, action) {
  switch (action.type) {
    case IS_ADDING_POST:
      return action.isAddingPost;
    default:
      return state;
  }
}

export function addPostFailure(state = false, action) {
  switch (action.type) {
    case ADD_POST_FAILURE:
      return action.addPostFailure;
    default:
      return state;
  }
}
