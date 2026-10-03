function CheckoutModal({
  open,
  customer,
  total,
  onClose,
  onUpdateCustomer,
  onPlaceOrder,
}) {
  if (!open) return null;

  return (
    <div className="modal-background">
      <div className="checkout-modal">
        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <span>FINAL STEP</span>

        <h2>Complete your order.</h2>

        <p>
          Tell us where to deliver your food.
        </p>

        <label>Full Name</label>

        <input
          type="text"
          placeholder="Juan Dela Cruz"
          value={customer.name}
          onChange={(e) =>
            onUpdateCustomer(
              "name",
              e.target.value
            )
          }
        />

        <label>Phone Number</label>

        <input
          type="tel"
          placeholder="09XX XXX XXXX"
          value={customer.phone}
          onChange={(e) =>
            onUpdateCustomer(
              "phone",
              e.target.value
            )
          }
        />

        <label>Delivery Address</label>

        <textarea
          placeholder="House number, street, barangay..."
          value={customer.address}
          onChange={(e) =>
            onUpdateCustomer(
              "address",
              e.target.value
            )
          }
        />

        <div className="checkout-total">
          <span>Total</span>
          <strong>₱{total}</strong>
        </div>

        <button
          className="primary-button checkout-button"
          onClick={onPlaceOrder}
        >
          Place Order →
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;
