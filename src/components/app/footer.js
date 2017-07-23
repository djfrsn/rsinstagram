import 'components/app/footer.scss';

const Footer = props => {
  const { className } = props;
  return (
    <footer className={`app-footer${className ? ` ${className}` : ''}`}>
      {props.children}
    </footer>
  );
};

export default Footer;
