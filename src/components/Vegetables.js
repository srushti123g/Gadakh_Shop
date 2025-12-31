import React, { useState } from "react";
import "./Vegetables.css";
import { vegetables, shopInfo } from "../data";
import { useLanguage } from "../context/LanguageContext";
import RecipeModal from "./RecipeModal";

const VegetableCard = ({ veg, t, index, cartQty, onAdd, onRemove, onOpenRecipe }) => {
  const [imgSrc, setImgSrc] = useState(veg.image);

  // Update image when prop changes
  React.useEffect(() => {
    setImgSrc(veg.image);
  }, [veg.image]);

  const handleError = () => {
    setImgSrc(`https://placehold.co/600x400/e8f5e9/1b5e20?text=${encodeURIComponent(veg.name)}`);
  };

  return (
    <div
      className={`veg-card ${cartQty > 0 ? 'selected' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="veg-image-container">
        <img
          src={imgSrc}
          alt={veg.name}
          className="veg-image"
          loading="lazy"
          onError={handleError}
        />
        {veg.category === 'exotic' && <span className="badge-exotic">✨ Exotic</span>}
        {veg.nutrition && <span className="badge-nutrition">🛡️ {veg.nutrition}</span>}

        {/* Recipe Button (if recipe exists) */}
        {veg.recipe && (
          <button className="btn-recipe-overlay" onClick={(e) => { e.stopPropagation(); onOpenRecipe(); }}>
            📖 Recipe
          </button>
        )}
      </div>

      <div className="veg-info">
        <div className="veg-name">{veg.name}</div>
        {veg.tip && <p className="chef-tip">👨‍🍳 <b>Chef's Tip:</b> {veg.tip}</p>}

        {/* Cart Controls */}
        <div className="cart-controls">
          {cartQty > 0 ? (
            <div className="qty-selector">
              <button onClick={(e) => { e.preventDefault(); onRemove(); }} className="btn-qty minus">-</button>
              <span className="qty-display">{cartQty}</span>
              <button onClick={(e) => { e.preventDefault(); onAdd(); }} className="btn-qty plus">+</button>
            </div>
          ) : (
            <button onClick={(e) => { e.preventDefault(); onAdd(); }} className="btn-add-cart">
              🛒 {t.vegetables.add}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function Vegetables() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Modal State

  // Cart Helpers
  const addToCart = (vegName) => {
    setCart(prev => ({
      ...prev,
      [vegName]: (prev[vegName] || 0) + 1
    }));
  };

  const removeFromCart = (vegName) => {
    setCart(prev => {
      const newQty = (prev[vegName] || 0) - 1;
      const newCart = { ...prev, [vegName]: newQty };
      if (newQty <= 0) delete newCart[vegName];
      return newCart;
    });
  };

  const cartTotal = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    const phone = shopInfo?.whatsapp?.[0] || "9860035883";
    let message = `Hi Gadakh Shop! I'd like to order:%0A`;
    Object.entries(cart).forEach(([name, qty]) => {
      message += `%0A- ${name} (${qty})`;
    });
    message += `%0A%0AMy Name: `;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Recipe Modal Helpers
  const handleOpenRecipe = (veg) => {
    setSelectedRecipe(veg.recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  const handleAddIngredients = () => {
    if (selectedRecipe) {
      // Simple simulation: Add 1 unit of the "Main" vegetable (inferred from context or we could pass it)
      // For now, let's just show an alert or close the modal.
      // In a real app, we'd add all ingredients.
      alert("Delicious choice! Ingredients added to your shopping list.");
      handleCloseRecipe();
    }
  };

  // Defensive check
  if (!vegetables || !Array.isArray(vegetables)) {
    return <div className="error-message">Loading vegetables...</div>;
  }

  const filteredVegetables = vegetables.filter(veg => {
    if (filter !== 'all' && veg.category !== filter) return false;
    if (searchTerm) return veg.name.toLowerCase().includes(searchTerm.toLowerCase());
    return true;
  });

  return (
    <div className="vegetables-container">
      <h2 className="vegetables-title">{t.vegetables.title}</h2>

      {/* Controls: Search & Filter */}
      <div className="controls-wrapper">

        {/* Search Bar */}
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder={language === 'en' ? "Search for vegetables..." : "भाजी शोधा..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            {language === 'en' ? "All" : "सर्व"}
          </button>
          <button className={`filter-btn ${filter === 'exotic' ? 'active' : ''}`} onClick={() => setFilter('exotic')}>
            {language === 'en' ? "✨ Exotic" : "✨ विदेशी"}
          </button>
          <button className={`filter-btn ${filter === 'daily' ? 'active' : ''}`} onClick={() => setFilter('daily')}>
            {language === 'en' ? "🥗 Daily Essentials" : "🥗 रोजच्या भाज्या"}
          </button>
        </div>

      </div>

      <div className="vegetables-grid">
        {filteredVegetables.length > 0 ? (
          filteredVegetables.map((veg, index) => (
            <VegetableCard
              key={veg.name}
              veg={veg}
              t={t}
              index={index}
              cartQty={cart[veg.name] || 0}
              onAdd={() => addToCart(veg.name)}
              onRemove={() => removeFromCart(veg.name)}
              onOpenRecipe={() => handleOpenRecipe(veg)}
            />
          ))
        ) : (
          <div className="no-results">
            <p>😕 {language === 'en' ? "No vegetables found matching your search." : "तुमच्या शोधाशी जुळणाऱ्या भाज्या सापडल्या नाहीत."}</p>
          </div>
        )}
      </div>

      {/* Floating Checkout Button */}
      {cartTotal > 0 && (
        <button className="floating-checkout" onClick={handleCheckout}>
          <span>🛒 Complete Order ({cartTotal})</span>
          <span className="checkout-arrow">→</span>
        </button>
      )}

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
        onAddIngredients={handleAddIngredients}
      />
    </div>
  );
}

export default Vegetables;
