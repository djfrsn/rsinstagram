import Icon from 'components/partials/faIcon';
import Body from 'components/app/body';
import UserThumbnail from 'components/partials/userThumbnail';
import 'components/post/post.body.scss';

const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cb1e

const PostBody = props =>
  <Body>
    <div className="color">
      <div className="row">
        <UserThumbnail />
        <p className="">nerdexplainsitall</p>
        <Icon name="dots" />
      </div>
      <img src={images('./hackathon.jpg')} className="post-body-image" />
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
