import './SubCategories.css';
import MenuImage from './MenuImage';

function SubCategories({ categories, parentName, onSelect, onBack }) {
  return (
    <div className="sub-categories">
      <div className="sub-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h2 className="sub-title">{parentName}</h2>
      </div>
      <div className="sub-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="sub-card"
            onClick={() => onSelect(category)}
          >
            <div className="sub-image-wrapper">
              <MenuImage
                src={category.image}
                alt={category.name}
                className="sub-image"
              />
            </div>
            <h3 className="sub-name">{category.name}</h3>
            {category.subtitle && (
              <p className="sub-subtitle">{category.subtitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategories;
