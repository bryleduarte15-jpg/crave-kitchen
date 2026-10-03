function CategoryNav({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="mobile-category-bar">
      {categories.map((item) => (
        <button
          key={item.name}
          type="button"
          className={
            selectedCategory === item.name
              ? "selected"
              : ""
          }
          onClick={() =>
            onCategoryChange(item.name)
          }
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryNav;
