import './CategoryCard.css';

function CategoryCard({ category, onClick }) {
  return (
    <div className="category-card" onClick={() => onClick(category)}>
      <div className="category-icon">
        {category.image ? (
          <img src={category.image} alt={category.name} className="category-image" />
        ) : (
          <span className="icon-placeholder">{category.name.charAt(0)}</span>
        )}
      </div>
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        {category.subtitle && (
          <p className="category-subtitle">{category.subtitle}</p>
        )}
        <span className="item-count">{category.items.length} urun</span>
      </div>
      <div className="category-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </div>
  );
}

export default CategoryCard;
