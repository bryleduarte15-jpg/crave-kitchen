function EmptyState({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="no-results">
      <div>{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      {buttonText && (
        <button
          type="button"
          className="primary-button"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
