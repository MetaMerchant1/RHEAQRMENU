import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <div className="item-image">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="product-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.placeholder;
            }}
          />
        ) : (
          <span className="image-placeholder">{item.name.charAt(0)}</span>
        )}
      </div>
      <div className="item-details">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-description">{item.description}</p>
      </div>
      <div className="item-price">
        <span className="price">{item.price} ₺</span>
      </div>
    </div>
  );
}

export default MenuItem;
