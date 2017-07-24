import 'components/app/body.scss';

const Body = ({ className, children }) =>
  <section className={`app-body${className ? ` ${className}` : ''}`}>
    {children}
  </section>;

export default Body;
