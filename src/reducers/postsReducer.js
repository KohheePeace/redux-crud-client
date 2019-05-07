import {
  FETCH_POSTS_SUCCESS,
} from '../actions'

export function posts(state = [], action) {
  switch (action.type) {
      case FETCH_POSTS_SUCCESS: //このactionがdispatchされたら、action.postsを返すよ~
        return action.posts
      default: //なにもされてないときは、デフォルトの[]を返すよ~
        return state;
  }
}
