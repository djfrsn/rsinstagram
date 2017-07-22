const Icon = props => {
  const { className, name } = props;
  return (
    <i
      className={`fa fa-${name}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    />
  );
};

export default Icon;
