import Icon from 'components/partials/faIcon';
import 'components/partials/nav.scss';

const Nav = props =>
  <nav className="app-nav">
    <Icon name="home" size="2x" className="app-nav-icon" />
    <Icon name="search" size="2x" className="app-nav-icon" />
    <Icon name="plus-square-o" size="2x" className="app-nav-icon" />
    <Icon name="heart-o" size="2x" className="app-nav-icon" />
    <Icon name="user-o" size="2x" className="app-nav-icon" />
  </nav>;

export default Nav;
