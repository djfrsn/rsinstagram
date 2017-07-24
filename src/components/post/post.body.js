import { Link } from 'react-router';
import truncate from 'lodash.truncate';
import Icon from 'components/partials/faIcon';
import Body from 'components/app/body';
import UserThumbnail from 'components/partials/userThumbnail';
import 'components/post/post.body.scss';

const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cbe

const PostBody = ({ post, likePost }) => {
  const { id, user, comments, likes, image, user_likes } = post;
  const { name: userName } = user;
  const onLikePost = () => likePost(post);
  let commentsPreviewUrl = { pathname: '/comments', query: { id } };
  let commentsIconUrl = {
    pathname: '/comments',
    query: { id, autofocus: true }
  };
  return (
    <Body>
      <div className="postbody-heading">
        <UserThumbnail className="postbody-userthumbnail" />
        <p className="postbody-username">
          {userName}
        </p>
        <Icon name="ellipsis-h" className="postbody-ellipsis" />
      </div>
      <div className="postbody-image-wrapper">
        <img src={images(`./${image}`)} className="postbody-image" />
      </div>
      <div className="postbody-actions-wrapper">
        <Icon
          name={user_likes ? 'heart' : 'heart-o'}
          size="2x"
          className={`postbody-icon${user_likes ? ' active' : ''}`}
          onClick={onLikePost}
        />
        <Link to={commentsIconUrl} className="postbody-msgpreview-link">
          <Icon name="comment-o" size="2x" className="postbody-icon" />
        </Link>
        <Icon name="paper-plane-o" size="2x" className="postbody-icon" />
        <Icon name="bookmark-o" size="2x" className="postbody-icon" />
      </div>
      <p className="postbody-likescount">
        {likes} likes
      </p>
      <div className="postbody-msgpreview-wrapper">
        <p className="postbody-msgpreview">
          <span className="postbody-username">
            {userName}
          </span>
          {truncate(comments[0].comment, { length: 15 })}
          <Link to={commentsPreviewUrl} className="postbody-msgpreview-link">
            more
          </Link>
        </p>
      </div>
      <p className="postbody-timestamp">26 minutes ago</p>
    </Body>
  );
};

export default PostBody;
