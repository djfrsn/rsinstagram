import Body from 'components/app/body';
import Icon from 'components/partials/faIcon';
import UserThumbnail from 'components/partials/userThumbnail';
import 'components/comments/comments.body.scss';

const CommentsBody = props =>
  <Body>
    <div className="comment-wrapper">
      <div className="comment-row">
        <div className="comment-userthumbnail-wrapper">
          <UserThumbnail className="comment-userthumbnail" />
        </div>
        <div className="comment-msg-wrapper">
          <p className="msg">
            <span className="comment-msg-username">nerdexplainsitall</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            lobortis sollicitudin est ac auctor. Fusce tellus mauris, pharetra a
            quam eu, sollicitudin ornare mi. Vestibulum eu luctus leo. Aenean
            eget aliquam risus.
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
          <span className="comment-footer-reply">reply</span>
        </p>
      </div>
      <span className="comment-linebreak" />
    </div>
  </Body>;

export default CommentsBody;
