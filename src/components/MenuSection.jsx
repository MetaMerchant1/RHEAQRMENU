import MenuItem from './MenuItem';
import './MenuSection.css';

function MenuSection({ category }) {
  return (
    <div className="menu-section">
      <div className="section-header">
        <h2 className="section-name">{category.name}</h2>
        {category.subtitle && (
          <p className="section-subtitle">{category.subtitle}</p>
        )}
      </div>
      <div className="items-list">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
