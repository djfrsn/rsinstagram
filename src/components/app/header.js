import 'components/app/header.scss';

const Header = ({ className, children }) =>
  <header className={`app-header${className ? ` ${className}` : ''}`}>
    {children}
  </header>;

export default Header;
