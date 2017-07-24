import 'components/app/footer.scss';

const Footer = ({ className, children }) =>
  <footer className={`app-footer${className ? ` ${className}` : ''}`}>
    {children}
  </footer>;

export default Footer;
