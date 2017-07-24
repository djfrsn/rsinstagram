import 'components/partials/faIcon.scss';

const Icon = ({ className, name, size, onClick, id }) =>
  <i
    className={`fa fa-${name} fa-${size ? `${size}` : '1x'}${className
      ? ` ${className}`
      : ''}`}
    aria-hidden="true"
    onClick={onClick ? onClick : null}
  />;

export default Icon;
