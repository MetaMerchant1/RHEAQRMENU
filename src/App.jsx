import { useState } from 'react';
import Header from './components/Header';
import MainCategories from './components/MainCategories';
import SubCategories from './components/SubCategories';
import MenuGrid from './components/MenuGrid';
import { mainCategories, subCategories } from './data/menuData';
import './App.css';

function App() {
  const [view, setView] = useState('main'); // 'main', 'sub', 'items'
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const handleMainSelect = (categoryId) => {
    setSelectedMain(categoryId);
    setView('sub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubSelect = (category) => {
    setSelectedSub(category);
    setView('items');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setSelectedMain(null);
    setView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSub = () => {
    setSelectedSub(null);
    setView('sub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getParentName = () => {
    const found = mainCategories.find(c => c.id === selectedMain);
    return found ? found.name : '';
  };

  return (
    <div className="app">
      <Header showBack={false} />
      <main className="main-content">
        {view === 'main' && (
          <MainCategories
            categories={mainCategories}
            onSelect={handleMainSelect}
          />
        )}
        {view === 'sub' && selectedMain && (
          <SubCategories
            categories={subCategories[selectedMain]}
            parentName={getParentName()}
            onSelect={handleSubSelect}
            onBack={handleBackToMain}
          />
        )}
        {view === 'items' && selectedSub && (
          <MenuGrid
            category={selectedSub}
            onBack={handleBackToSub}
          />
        )}
      </main>
      <footer className="footer">
        <p>RHEA Coffee & Eatry</p>
      </footer>
    </div>
  );
}

export default App;
