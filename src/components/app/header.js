import 'components/app/header.scss';

const Header = props =>
  <header className="app-header">
    {props.children}
  </header>;

export default Header;
