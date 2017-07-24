import { Component } from 'react';
import Footer from 'components/app/footer';
import Icon from 'components/partials/faIcon';
import 'components/comments/comments.footer.scss';

class CommentsFooter extends Component {
  componentDidMount() {
    const inputHasText = this.props.postCommentInputValue.length > 0;
    if (inputHasText) {
      this.props.updatePostCommentInputValue(''); // clear any stored input val on initial render
    }
  }
  render() {
    const {
      post,
      postCommentInputValue,
      postComment,
      updatePostCommentInputValue
    } = this.props;
    const onPostComment = e => postComment(post);
    const onPostCommentValueChange = e =>
      updatePostCommentInputValue(e.currentTarget.value);
    return (
      <Footer className="commentsfooter">
        <div className="commentsfooter-icon-wrapper">
          <Icon
            name="paper-plane-o"
            size="2x"
            className="commentsfooter-icon"
          />
        </div>
        <div className="commentsfooter-input-wrapper">
          <input
            className="commentinput"
            type="text"
            value={postCommentInputValue}
            placeholder="Add a comment..."
            onChange={onPostCommentValueChange}
          />
        </div>
        <div className="commentsfooter-postbutton-wrapper">
          <button
            className={`${postCommentInputValue.length > 0 ? 'active' : ''}`}
            onClick={onPostComment}
          >
            Post
          </button>
        </div>
      </Footer>
    );
  }
}

export default CommentsFooter;
