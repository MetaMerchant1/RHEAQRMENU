import CategoryCard from './CategoryCard';
import './CategoryList.css';

function CategoryList({ categories, onSelectCategory }) {
  return (
    <div className="category-list">
      <h2 className="section-title">Kategoriler</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
