function Feature({
  icon,
  title,
  description,
}) {
  return (
    <div className="feature">
      <div className="feature-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>

        <small>
          {description}
        </small>
      </div>
    </div>
  );
}

export default Feature;
