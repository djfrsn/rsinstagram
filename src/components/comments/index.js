import { connect } from 'react-redux';
import find from 'lodash.find';
import { postActions } from 'features/post';
import CommentsHeader from 'components/comments/comments.header';
import CommentsBody from 'components/comments/comments.body';
import CommentFooter from 'components/comments/comments.footer';

let getComments = ({ post, routing }) => {
  const id = routing.locationBeforeTransitions.query.id;
  const data = find(post.posts, { id: Number(id) }) || {};
  return { post: data, comments: data.comments };
};

const Comments = ({
  post,
  postComment,
  updatePostCommentInputValue,
  routing
}) => {
  const data = getComments({ post, routing });
  return (
    <div>
      <CommentsHeader />
      <CommentsBody comments={data.comments || []} />
      <CommentFooter
        post={data.post}
        postCommentInputValue={post.postCommentInputValue}
        postComment={postComment}
        updatePostCommentInputValue={updatePostCommentInputValue}
      />
    </div>
  );
};

export default connect(
  state => ({
    post: state.post,
    routing: state.routing
  }),
  { ...postActions }
)(Comments);
