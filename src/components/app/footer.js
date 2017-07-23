import 'components/app/footer.scss';

const Footer = ({ className }) =>
  <footer className={`app-footer${className ? ` ${className}` : ''}`}>
    {props.children}
  </footer>;

export default Footer;
