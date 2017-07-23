import 'components/app/header.scss';

const Header = props => {
  const { className } = props;
  return (
    <header className={`app-header${className ? ` ${className}` : ''}`}>
      {props.children}
    </header>
  );
};

export default Header;
