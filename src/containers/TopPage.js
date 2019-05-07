import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../actions'

class TopPage extends Component {
  componentDidMount () {
    // 初めは空のstoreにあるposts state
    // getPostsをdispatchすることで
    // backendのrails apiをコール
    // 帰ってきたデータをstoreのposts stateに注入
    // このコンポーネントはstoreに繋がっているので、それが反映される

    // https://react-redux.js.org/using-react-redux/connect-mapdispatch
    // 上にある通り、connectでTopPageが囲まれるとdispatch propsが渡される
    const { dispatch } = this.props
    dispatch(getPosts())
  }

  render() {
    const { posts, isFetchingPosts, fetchPostsFailure } = this.props
    if (isFetchingPosts) {
      return (
        <p>Fetching posts...</p>
      )
    }

    if (fetchPostsFailure) {
      return (
        <p>Failed to fetch posts...</p>
      )
    }

    if(posts.length) {
      return (
        <div>
          <h4>posts</h4>
          {posts.map(post => {
            return (
              <div key={ post.id }>       
                <h4>
                  <Link to={`/posts/${post.id}`}>
                    {post.id}: {post.title}
                  </Link>
                </h4>
                <p>{post.content}</p>
              </div>
            )
          })}
        </div>
      )    
    } else {
      return (<div>No posts</div>)
    }
  }
}

/* Storeのposts stateをTopPageコンポーネントのposts propsに渡したい */
const mapStateToProps = (state) => {
  const { posts, isFetchingPosts, fetchPostsFailure } = state
  return { posts, isFetchingPosts, fetchPostsFailure }
}

/* ReduxのStoreと、このTopPageコンポーネントに接続する */
export default connect(mapStateToProps)(TopPage)