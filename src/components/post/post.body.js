import { Link } from 'react-router';
import Icon from 'components/partials/faIcon';
import Body from 'components/app/body';
import UserThumbnail from 'components/partials/userThumbnail';
import 'components/post/post.body.scss';

const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cb1e

const PostBody = props =>
  <Body>
    <div className="postbody-heading">
      <UserThumbnail className="postbody-userthumbnail" />
      <p className="postbody-username">nerdexplainsitall</p>
      <Icon name="ellipsis-h" className="postbody-ellipsis" />
    </div>
    <div className="postbody-image-wrapper">
      <img src={images('./hackathon.jpg')} className="postbody-image" />
    </div>
    <div className="postbody-actions-wrapper">
      <Icon
        name="heart-o"
        size="2x"
        className="postbody-icon"
        onClick={props.fetchPost}
      />
      <Icon name="comment-o" size="2x" className="postbody-icon" />
      <Icon name="paper-plane-o" size="2x" className="postbody-icon" />
      <Icon name="bookmark-o" size="2x" className="postbody-icon" />
    </div>
    <p className="postbody-likescount">34 likes</p>
    <div className="postbody-msgpreview-wrapper">
      <p className="postbody-msgpreview">
        <span className="postbody-username">nerdexplainsitall</span>
        preview...
        <Link to="/comments" className="postbody-msgpreview-link">
          more
        </Link>
      </p>
    </div>
    <p className="postbody-timestamp">26 minutes ago</p>
  </Body>;

export default PostBody;
