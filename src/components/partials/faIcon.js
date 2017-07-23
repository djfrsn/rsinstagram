import 'components/partials/faIcon.scss';

const Icon = props => {
  const { className, name, size, onClick } = props;
  return (
    <i
      className={`fa fa-${name} fa-${size ? `${size}` : '1x'}${className
        ? ` ${className}`
        : ''}`}
      aria-hidden="true"
      onClick={onClick ? onClick : null}
    />
  );
};

export default Icon;
