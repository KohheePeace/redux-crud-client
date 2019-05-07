import axios from 'axios'
import history from '../history'

const apiUrl = 'http://localhost:3001'

/* まぁ, 理解するより慣れた方が早い気がします. */
// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.
// You send them to the store using store.dispatch().

// action types
// 公式のより、下記のurlの定義の方が分かりやすかった。
// https://github.com/stowball/dummys-guide-to-redux-and-thunk-react/blob/master/src/actions/items.js
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const IS_FETCHING_POSTS = 'IS_FETCHING_POSTS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// action creators
const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

const fetchPostsFailure = (bool) => ({
  type: FETCH_POSTS_FAILURE,
  fetchPostsFailure: bool
})

const isFetchingPosts = (bool) => ({
  type: IS_FETCHING_POSTS,
  isFetchingPosts: bool
})

// async action creator
export const getPosts = () => {
  return (dispatch) => {
    dispatch(isFetchingPosts(true))
    return axios.get(`${apiUrl}/posts`)
      .then((response) => {
        dispatch(isFetchingPosts(false))
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(isFetchingPosts(false))
        dispatch(fetchPostsFailure(true))
      })
  }
}

export const IS_ADDING_POST = 'IS_ADDING_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

const isAddingPost = (bool) => ({
  type: IS_ADDING_POST,
  isAddingPost: bool
})

const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  post
})

const addPostFailure = (bool) => ({
  type: ADD_POST_FAILURE,
  addPostFailure: bool
})

export const addPost = ({ title, content }) => {
  return (dispatch) => {
    dispatch(isAddingPost(true))
    return axios.post(`${apiUrl}/posts`, {title, content})
      .then((response) => {
        dispatch(isAddingPost(false))
        const { data } = response
        const newPost = { id: data.id, title: data.title, content: data.content }
        dispatch(addPostSuccess(newPost))
      })
      .then(() => {
        history.push("/")
      })
      .catch(error => {
        dispatch(isAddingPost(false))
        dispatch(addPostFailure(true))
      })
  }
}

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const IS_FETCHING_POST = 'IS_FETCHING_POST'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

// action creators
const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post
})

const fetchPostFailure = (bool) => ({
  type: FETCH_POST_FAILURE,
  fetchPostFailure: bool
})

const isFetchingPost = (bool) => ({
  type: IS_FETCHING_POST,
  isFetchingPost: bool
})

// async action creator
export const getPost = (id) => {
  return (dispatch) => {
    dispatch(isFetchingPost(true))
    return axios.get(`${apiUrl}/posts/${id}`)
      .then((response) => {
        dispatch(isFetchingPost(false))
        dispatch(fetchPostSuccess(response.data))
      })
      .catch((error) => {
        dispatch(isFetchingPost(false))
        dispatch(fetchPostFailure(true))
      })
  }
}

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'

const deletePostSuccess = id => ({
  type: DELETE_POST_SUCCESS,
  id
})

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/posts/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(id))
      })
      .then(() => {
        history.push("/")
      })
  }
}