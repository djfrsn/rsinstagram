const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cb1e

const UserThumbnail = ({ className, src }) =>
  <img
    src={src ? images(`./${src}`) : images('./default_avatar.png')}
    className={`app-user-thumbnail${className ? ` ${className}` : ''}`}
  />;

export default UserThumbnail;
