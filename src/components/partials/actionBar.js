import Icon from 'components/partials/faIcon';
import 'components/partials/actionBar.scss';

const images = require.context('assets/images', true); // dynamic image require - https://medium.com/@bogdan_plieshka/loading-static-and-dynamic-images-with-webpack-8a933e82cb1e

const ActionBar = props =>
  <section className="actionbar-section">
    <div className="actionbar-icon-wrapper">
      <Icon
        name="instagram"
        className="actionbar-icon actionbar-icon-camera fa-2x"
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
        className="actionbar-icon actionbar-icon-plane  fa-2x"
      />
    </div>
  </section>;

export default ActionBar;
