import Icon from 'components/partials/fa-icon';
import Body from 'components/app/body';
import 'components/post/post.body.scss';

const PostBody = props =>
  <Body>
    <div className="color">
      <div className="row">
        <image src="userprofile" className="userprofile" />
        <p className="">nerdexplainsitall</p>
        <Icon name="dots" />
      </div>
      <image src="postimage" />
      <div className="row">
        <Icon name="hear" />
        <Icon name="hear" />
        <Icon name="hear" />
      </div>
      <div className="row">
        <p className="likes">34 likes</p>
      </div>
      <div className="row">
        <p className="username">nerdexplainsitall</p>
        <p className="msgpreview">preview...</p>
        <p className="more">more</p>
      </div>
      <div className="row">
        <p className="timestamp">26 minutes ago</p>
      </div>
    </div>
  </Body>;

export default PostBody;
