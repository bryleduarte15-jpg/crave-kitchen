function Topbar({
  itemCount,
  onCartClick,
}) {
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <div className="brand-logo">CR</div>
        <strong>CRAVE</strong>
      </div>

      <div className="topbar-title">
        <span>GOOD FOOD</span>
        <strong>Made for you.</strong>
      </div>

      <div className="topbar-actions">
        <button
          className="cart-button"
          onClick={onCartClick}
        >
          <span className="cart-icon">🛒</span>

          <span className="cart-text">
            Cart
          </span>

          {itemCount > 0 && (
            <b>{itemCount}</b>
          )}
        </button>
      </div>
    </header>
  );
}

export default Topbar;
