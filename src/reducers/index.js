import { combineReducers } from 'redux'
import {
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure
} from './postsReducer'

import {
  post,
  fetchPostFailure,
  isFetchingPost
} from './postReducer'

/* 公式ドキュメントのreducersの定義 */
// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe what happened, but don't describe how the application's state changes.

/* これが、src/index.js　でstoreと繋がってるのを忘れずに! */
/* storeが意識しずらいのが理解し難い原因かも... */
/* storeをそれ自身ではなく、変化するもの(reducers)で外堀から定義していく */
export default combineReducers({
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure,
  post,
  fetchPostFailure,
  isFetchingPost
})