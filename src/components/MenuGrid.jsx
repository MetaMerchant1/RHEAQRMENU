import { useState } from 'react';
import './MenuGrid.css';
import ProductBottomSheet from './ProductBottomSheet';

function MenuGrid({ category, onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="menu-grid-container">
      <div className="menu-grid-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div className="menu-grid-title-wrapper">
          <h2 className="menu-grid-title">{category.name}</h2>
          <div className="title-line"></div>
        </div>
      </div>
      <div className="menu-grid">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="grid-item"
            onClick={() => handleItemClick(item)}
          >
            <div className="grid-item-image-wrapper">
              <img
                src={item.image}
                alt={item.name}
                className="grid-item-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.placeholder;
                }}
              />
            </div>
            <div className="grid-item-info">
              <h4 className="grid-item-name">{item.name}</h4>
              <p className="grid-item-description">{item.description}</p>
              {item.price && (
                <span className="grid-item-price">{item.price} TL</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProductBottomSheet
        item={selectedItem}
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
      />
    </div>
  );
}

export default MenuGrid;
