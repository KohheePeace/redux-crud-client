import axios from 'axios'

const apiUrl = 'http://localhost:3001'

/* まぁ, 理解するより慣れた方が早い気がします. */
// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.
// You send them to the store using store.dispatch().

// action types
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

// action creators
const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

// async action creator
export const getPosts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/posts.json`)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}