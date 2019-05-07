import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost, deletePost } from '../actions'

class PostShow extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { post, isFetchingPost, fetchPostFailure } = this.props

    if (isFetchingPost) {
      return (
        <p>Fetching posts...</p>
      )
    }

    if (fetchPostFailure) {
      return (
        <p>Failed to fetch posts...</p>
      )
    }

    return (
      <div>
        <h2>{post.id}: {post.title}</h2>
        <p>{post.content}</p>
        <div>
          <Link to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
          <button type="button" onClick={() => this.props.deletePost(post.id)}>
            Delete
          </button>
        </div>
        <hr/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({ post: state.post, isFetchingPost: state.isFetchingPost, fetchPostFailure: state.fetchPostFailure })
/* 上のをかっこよく書くと... */
const mapStateToProps = ({ post, isFetchingPost, fetchPostFailure }) => ({ post, isFetchingPost, fetchPostFailure })

/* mapDispatchToPropsを使ってみる... */
const mapDispatchToProps = { getPost, deletePost }

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)