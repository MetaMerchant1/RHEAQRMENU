import './Header.css';

function Header({ showBack, onBack }) {
  return (
    <header className="header">
      {showBack && (
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      )}
      <div className="header-content">
        <div className="logo-wrapper">
          <img src="/rhea-logo.png" alt="RHEA" className="logo-image" />
          <span className="registered-symbol">®</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
