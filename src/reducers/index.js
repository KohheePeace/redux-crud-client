import { combineReducers } from 'redux'
import {
  posts
} from './postsReducer'

/* 公式ドキュメントのreducersの定義 */
// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe what happened, but don't describe how the application's state changes.

/* これが、src/index.js　でstoreと繋がってるのを忘れずに! */
/* storeが意識しずらいのが理解し難い原因かも... */
export default combineReducers({
  posts
})