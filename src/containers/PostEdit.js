import React from 'react';
import { connect } from 'react-redux';
import { getPost, updatePost } from '../actions';

class PostEdit extends React.Component {
  // https://stackoverflow.com/questions/34952530/i-am-using-redux-should-i-manage-controlled-input-state-in-the-redux-store-or-u
  // Local State Or Global State
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
      .then(() => {
        const { post } = this.props
        const { title, content } = post
        this.setState({
          title,
          content
        })
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.post.id;
    const { title, content } = this.state
    const post = { id, title, content }
    this.props.updatePost(post);
  };

  render() {
    const { title, content } = this.state
    return (
      <div>
        <h1>Edit {title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </div>
          <div>
            <label>Content</label>
            <textarea name="content" rows="3" value={content} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post })

const mapDispatchToProps = { updatePost, getPost }

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
