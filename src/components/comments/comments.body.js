import Body from 'components/app/body';
import Icon from 'components/partials/fa-icon';

const CommentsBody = props =>
  <Body>
    <div className="comment">
      <image src="userprofile" className="userprofile" />
      <p className="username">nerdexplainsitall</p>
      <p className="msg">nerdexplainsitall</p>
      <Icon name="heart" />
      <p className="timestamp">4d</p>
      <p className="likecount">1 like</p>
      <p className="reply">reply</p>
    </div>
  </Body>;

export default CommentsBody;
