function Sidebar({
  page,
  favoritesCount,
  ordersCount,
  categories,
  onHome,
  onMenu,
  onFavorites,
  onOrders,
  onCategory,
}) {
  return (
    <aside className="sidebar">
      <div
        className="sidebar-brand"
        onClick={onHome}
        role="button"
        tabIndex={0}
      >
        <div className="brand-logo">CR</div>

        <div>
          <strong>CRAVE</strong>
          <small>KITCHEN</small>
        </div>
      </div>

      <div className="sidebar-label">MENU</div>

      <nav className="sidebar-nav">
        <button
          className={page === "home" ? "active" : ""}
          onClick={onHome}
        >
          <span className="nav-icon">⌂</span>
          Home
        </button>

        <button
          className={page === "menu" ? "active" : ""}
          onClick={() => onMenu()}
        >
          <span className="nav-icon">☷</span>
          Our Menu
        </button>

        <button
          className={page === "favorites" ? "active" : ""}
          onClick={onFavorites}
        >
          <span className="nav-icon">♥</span>
          Favorites

          {favoritesCount > 0 && (
            <b className="nav-count">
              {favoritesCount}
            </b>
          )}
        </button>

        <button
          className={page === "orders" ? "active" : ""}
          onClick={onOrders}
        >
          <span className="nav-icon">▣</span>
          Orders

          {ordersCount > 0 && (
            <b className="nav-count">
              {ordersCount}
            </b>
          )}
        </button>
      </nav>

      <div className="sidebar-label category-label">
        CATEGORIES
      </div>

      <div className="sidebar-categories">
        {categories.slice(1).map((item) => (
          <button
            key={item.name}
            onClick={() => onCategory(item.name)}
            className={
              page === "menu" &&
              item.name === item.name
                ? ""
                : ""
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-promo">
          <div className="promo-circle">%</div>

          <strong>Hungry?</strong>

          <p>
            Get something delicious today.
          </p>

          <button onClick={() => onMenu()}>
            Order now
          </button>
        </div>

        <div className="sidebar-footer">
          <span className="status-dot" />
          Open now
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
