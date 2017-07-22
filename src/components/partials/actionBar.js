import Icon from 'components/partials/fa-icon';
import 'components/partials/actionBar.scss';

const ActionBar = props =>
  <section className="actionbar-section">
    <div className="actionbar-icon-wrapper">
      <Icon
        name="instagram"
        className="actionbar-icon actionbar-icon-camera fa-2x"
      />
    </div>
    <div className="actionbar-logo-wrapper">
      <div className="actionbar-logo">Instagram</div>
    </div>
    <div className="actionbar-icon-wrapper">
      <Icon
        name="paper-plane-o"
        className="actionbar-icon actionbar-icon-plane  fa-2x"
      />
    </div>
  </section>;

export default ActionBar;
