import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class PostNew extends React.Component {
  state = { 
    title: '',
    content: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(addPost(this.state))   
  }

  render() {
    const { isAddingPost, addPostFailure } = this.props
    return (
      <div>
        {isAddingPost &&
          <p>Adding post now...</p>
        }
        {addPostFailure &&
          <p>Failed to add post...</p>
        }
        <h4>Add New Post</h4>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              type="text"
              name="title"
              required
              value={this.state.title}
              onChange={this.handleChange} 
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              name="content"
              rows="5"
              required
              value={this.state.content}
              onChange={this.handleChange} 
              placeholder="Content"
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isAddingPost, addPostFailure } = state
  return { isAddingPost, addPostFailure }
}

export default connect(mapStateToProps)(PostNew)