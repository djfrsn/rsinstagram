import 'components/partials/faIcon.scss';

const Icon = props => {
  const { className, name, size } = props;
  return (
    <i
      className={`fa fa-${name} fa-${size ? `${size}` : '1x'}${className
        ? ` ${className}`
        : ''}`}
      aria-hidden="true"
    />
  );
};

export default Icon;
