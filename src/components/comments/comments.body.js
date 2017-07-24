import Body from 'components/app/body';
import Icon from 'components/partials/faIcon';
import UserThumbnail from 'components/partials/userThumbnail';
import 'components/comments/comments.body.scss';

const CommentsBody = ({ comments }) =>
  <Body>
    {comments.map((comment, index, commentsArray) =>
      <div key={comment.id} className="comment-wrapper">
        <div className="comment-row">
          <div className="comment-userthumbnail-wrapper">
            <UserThumbnail className="comment-userthumbnail" />
          </div>
          <div className="comment-msg-wrapper">
            <p className="msg">
              <span className="comment-msg-username">
                {comment.name}
              </span>
              {comment.comment}
            </p>
          </div>
          <div className="comment-like-wrapper">
            <Icon name="heart-o" />
          </div>
        </div>
        <div className="comment-footer">
          <p>
            <span className="comment-footer-timestamp">4d</span>{' '}
            <span className="comment-footer-likecount">1 like</span>{' '}
            <span className="comment-footer-reply">Reply</span>
          </p>
        </div>
        {index !== commentsArray.length - 1
          ? <span className="comment-linebreak" />
          : null}
      </div>
    )}
  </Body>;

export default CommentsBody;
