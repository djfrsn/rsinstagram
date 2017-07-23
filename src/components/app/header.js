import 'components/app/header.scss';

const Header = ({ className }) =>
  <header className={`app-header${className ? ` ${className}` : ''}`}>
    {props.children}
  </header>;

export default Header;
