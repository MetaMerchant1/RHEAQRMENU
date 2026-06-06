import './MainCategories.css';
import MenuImage from './MenuImage';

function MainCategories({ categories, onSelect }) {
  return (
    <div className="main-categories">
      <h2 className="main-title">MENULERIMIZ</h2>
      <div className="main-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="main-card"
            onClick={() => onSelect(category.id)}
          >
            <div className="main-image-wrapper">
              <MenuImage
                src={category.image}
                alt={category.name}
                className="main-image"
                eager
              />
            </div>
            <h3 className="main-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCategories;
