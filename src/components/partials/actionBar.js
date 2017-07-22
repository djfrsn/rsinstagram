import Icon from 'components/partials/fa-icon';

const ActionBar = props =>
  <section>
    <div>
      <Icon iconName="camera" />
      <h1 className="actionbar-title">Instagram</h1>
      <Icon iconName="paper-plane-o" />
    </div>
  </section>;

export default ActionBar;
