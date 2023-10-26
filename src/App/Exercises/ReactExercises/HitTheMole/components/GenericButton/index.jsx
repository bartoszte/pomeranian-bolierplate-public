import './styles.css';

export const GenericButton = ({
  onClickFunc = () => {},
  classNames = '',
  isActive = false,
  isDisabled = false,
  children,
}) => {
  const activeClassName = isActive ? 'button--active' : '';
  const disabledClassName = isDisabled ? 'button--disabled' : '';
  const classNameFinal = `mole-button ${classNames} ${activeClassName} ${disabledClassName}`;
  return (
    <button
      disabled={isDisabled}
      className={classNameFinal}
      onClick={onClickFunc}
    >
      {children}
    </button>
  );
};
