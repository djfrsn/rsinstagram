import CommentsHeader from 'components/comments/comments.header';
import CommentsBody from 'components/comments/comments.body';
import CommentFooter from 'components/comments/comments.footer';

const Comments = props =>
  <div>
    <CommentsHeader />
    <CommentsBody />
    <CommentFooter />
  </div>;

export default Comments;
