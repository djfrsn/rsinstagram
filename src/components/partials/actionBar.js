import Icon from 'components/partials/faIcon';
import 'components/partials/actionBar.scss';

const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cb1e

const ActionBar = props =>
  <section className="actionbar-section">
    <div className="actionbar-icon-wrapper">
      <Icon
        name="instagram"
        size="2x"
        className="actionbar-icon actionbar-icon-camera"
      />
    </div>
    <div className="actionbar-logo-wrapper">
      <img
        src={images('./instagram_logo.png')}
        className="actionbar-logo"
        alt="Instagram"
      />
    </div>
    <div className="actionbar-icon-wrapper">
      <Icon
        name="paper-plane-o"
        size="2x"
        className="actionbar-icon actionbar-icon-plane"
      />
    </div>
  </section>;

export default ActionBar;
