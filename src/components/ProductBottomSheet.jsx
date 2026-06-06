import { useState, useEffect } from 'react';
import './ProductBottomSheet.css';

function ProductBottomSheet({ item, isOpen, onClose }) {
  const [selections, setSelections] = useState({});
  const [totalPrice, setTotalPrice] = useState(item?.price || 0);
  const [showLightbox, setShowLightbox] = useState(false);

  // Reset selections when item changes
  useEffect(() => {
    if (item) {
      const initialSelections = {};
      item.customizations?.forEach(customization => {
        if (customization.type === 'single' && customization.required) {
          initialSelections[customization.id] = customization.options[0].id;
        } else if (customization.type === 'multiple') {
          initialSelections[customization.id] = [];
        }
      });
      setSelections(initialSelections);
    }
  }, [item]);

  // Calculate total price when selections change
  useEffect(() => {
    if (!item) return;

    let total = item.price;

    item.customizations?.forEach(customization => {
      const selection = selections[customization.id];

      if (customization.type === 'single' && selection) {
        const selectedOption = customization.options.find(opt => opt.id === selection);
        if (selectedOption) {
          total += selectedOption.price;
        }
      } else if (customization.type === 'multiple' && Array.isArray(selection)) {
        selection.forEach(selectedId => {
          const selectedOption = customization.options.find(opt => opt.id === selectedId);
          if (selectedOption) {
            total += selectedOption.price;
          }
        });
      }
    });

    setTotalPrice(total);
  }, [selections, item]);

  const handleSingleSelect = (customizationId, optionId) => {
    setSelections(prev => ({
      ...prev,
      [customizationId]: optionId
    }));
  };

  const handleMultipleSelect = (customizationId, optionId) => {
    setSelections(prev => {
      const current = prev[customizationId] || [];
      const isSelected = current.includes(optionId);

      return {
        ...prev,
        [customizationId]: isSelected
          ? current.filter(id => id !== optionId)
          : [...current, optionId]
      };
    });
  };

  if (!item) return null;

  return (
    <>
      <div
        className={`bottom-sheet-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
        <div className="bottom-sheet-handle" onClick={onClose}>
          <div className="handle-bar"></div>
        </div>

        <div className="bottom-sheet-content">
          {/* Product Header */}
          <div className="product-header">
            <div className="product-image-wrapper" onClick={() => setShowLightbox(true)}>
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.placeholder;
                }}
              />
              <div className="zoom-hint">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <path d="M11 8v6M8 11h6"></path>
                </svg>
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-description">{item.description}</p>
              <span className="product-base-price">{item.price} TL</span>
            </div>
          </div>

          {/* Customizations */}
          {item.customizations && item.customizations.length > 0 && (
            <div className="customizations">
              {item.customizations.map(customization => (
                <div key={customization.id} className="customization-group">
                  <h3 className="customization-title">
                    {customization.name}
                    {customization.required && <span className="required">*</span>}
                  </h3>

                  <div className="customization-options">
                    {customization.type === 'single' ? (
                      customization.options.map(option => (
                        <button
                          key={option.id}
                          className={`option-btn ${selections[customization.id] === option.id ? 'selected' : ''}`}
                          onClick={() => handleSingleSelect(customization.id, option.id)}
                        >
                          <span className="option-label">{option.label}</span>
                          {option.price > 0 && (
                            <span className="option-price">+{option.price} TL</span>
                          )}
                        </button>
                      ))
                    ) : (
                      customization.options.map(option => (
                        <button
                          key={option.id}
                          className={`option-btn checkbox ${(selections[customization.id] || []).includes(option.id) ? 'selected' : ''}`}
                          onClick={() => handleMultipleSelect(customization.id, option.id)}
                        >
                          <span className="checkbox-indicator">
                            {(selections[customization.id] || []).includes(option.id) ? '✓' : ''}
                          </span>
                          <span className="option-label">{option.label}</span>
                          {option.price > 0 && (
                            <span className="option-price">+{option.price} TL</span>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total Section */}
          <div className="total-section">
            <span className="total-label">TOPLAM</span>
            <span className="total-price">{totalPrice} TL</span>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {showLightbox && (
        <div className="lightbox" onClick={() => setShowLightbox(false)}>
          <button className="lightbox-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
          <img
            src={item.image}
            alt={item.name}
            className="lightbox-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.placeholder;
            }}
          />
        </div>
      )}
    </>
  );
}

export default ProductBottomSheet;
