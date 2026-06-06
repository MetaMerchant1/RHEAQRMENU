import { useState, useEffect } from 'react';
import './MenuImage.css';

// Renders a product image, or a "work in progress" placeholder when the image
// is missing (e.g. Unsplash/mockup images that were intentionally cleared) or
// fails to load. Real local photos render normally.
function MenuImage({ src, alt, className, eager = false }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div className={`image-wip ${className || ''}`}>
        <span className="image-wip-text">Görsel çalışması yapılıyor</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default MenuImage;
