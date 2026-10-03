function OrderCard({
  order,
  foods,
}) {
  const formattedDate = new Date(
    order.date
  ).toLocaleString("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <span>ORDER</span>

          <h2>
            #{order.id}
          </h2>

          <small>
            {formattedDate}
          </small>
        </div>

        <strong>
          {order.status}
        </strong>
      </div>

      <div className="order-card-items">
        {order.items.map((item) => {
          const food = foods.find(
            (food) =>
              food.id ===
              item.product_id
          );

          return (
            <div
              className="order-card-item"
              key={item.product_id}
            >
              <img
                src={food?.image}
                alt={item.name}
              />

              <div>
                <strong>
                  {item.name}
                </strong>

                <small>
                  {item.qty} × ₱
                  {item.price}
                </small>
              </div>

              <b>
                ₱{item.subtotal}
              </b>
            </div>
          );
        })}
      </div>

      <div className="order-card-footer">
        <span>
          Deliver to:{" "}
          {order.customer.address}
        </span>

        <strong>
          ₱{order.total}
        </strong>
      </div>
    </article>
  );
}

export default OrderCard;
