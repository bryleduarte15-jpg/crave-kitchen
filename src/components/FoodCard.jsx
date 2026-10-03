function FoodCard({
  food,
  addToCart,
  large,
  favorite,
  toggleFavorite,
}) {
  return (
    <article
      className={
        large
          ? "food-card large"
          : "food-card"
      }
    >
      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
        />

        <button
          className={
            favorite
              ? "favorite-button liked"
              : "favorite-button"
          }
          onClick={() =>
            toggleFavorite(food.id)
          }
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="food-content">
        <span className="food-category">
          {food.category}
        </span>

        <h3>{food.name}</h3>

        <div className="food-bottom">
          <strong>
            ₱{food.price}
          </strong>

          <button
            onClick={() => addToCart(food)}
          >
            <span>+</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
