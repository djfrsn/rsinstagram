const Icon = props =>
  <i
    className={`fa fa-${props.iconName} ${props.cssClassName || ''}`}
    aria-hidden="true"
  />;

export default Icon;
