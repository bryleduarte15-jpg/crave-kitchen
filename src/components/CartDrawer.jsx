function CartDrawer({
  cart,
  foods,
  cartOpen,
  subtotal,
  deliveryFee,
  total,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onCheckout,
  onBrowseMenu,
}) {
  return (
    <>
      {cartOpen && (
        <div
          className="overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={
          cartOpen
            ? "cart-drawer open"
            : "cart-drawer"
        }
      >
        <div className="cart-header">
          <div>
            <span>YOUR ORDER</span>
            <h2>Shopping Cart</h2>
          </div>

          <button onClick={onClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              🛒
            </div>

            <h3>Your cart is empty</h3>

            <p>
              Add something delicious to get
              started.
            </p>

            <button
              className="primary-button"
              onClick={onBrowseMenu}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => {
                const food = foods.find(
                  (food) =>
                    food.id ===
                    item.product_id
                );

                return (
                  <div
                    className="cart-item"
                    key={item.product_id}
                  >
                    <img
                      src={food?.image}
                      alt={item.name}
                    />

                    <div className="cart-item-info">
                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        ₱{item.price}
                      </span>

                      <div className="quantity">
                        <button
                          onClick={() =>
                            onDecrease(
                              item.product_id
                            )
                          }
                        >
                          −
                        </button>

                        <b>{item.qty}</b>

                        <button
                          onClick={() =>
                            onIncrease(
                              item.product_id
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-right">
                      <strong>
                        ₱{item.subtotal}
                      </strong>

                      <button
                        onClick={() =>
                          onRemove(
                            item.product_id
                          )
                        }
                      >
                        ×
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-bottom">
              <button
                className="clear-cart-button"
                onClick={onClear}
              >
                Clear cart
              </button>

              <div className="bill-row">
                <span>Subtotal</span>
                <b>₱{subtotal}</b>
              </div>

              <div className="bill-row">
                <span>Delivery</span>
                <b>₱{deliveryFee}</b>
              </div>

              <div className="bill-total">
                <span>Total</span>
                <strong>₱{total}</strong>
              </div>

              <button
                className="primary-button checkout-button"
                onClick={onCheckout}
              >
                Checkout • ₱{total}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
