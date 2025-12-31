import React from 'react';
import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose, onAddIngredients }) => {
    if (!recipe) return null;

    return (
        <div className="recipe-modal-backdrop" onClick={onClose}>
            <div className="recipe-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="recipe-header">
                    <span className="recipe-emoji">👨‍🍳</span>
                    <h3>{recipe.title}</h3>
                    <span className="recipe-time">⏱️ {recipe.time}</span>
                </div>

                <div className="recipe-body">
                    <div className="recipe-section">
                        <h4>🥕 Ingredients</h4>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="recipe-section">
                        <h4>🔥 Instructions</h4>
                        <ol className="steps-list">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="recipe-footer">
                    <button className="btn-add-ingredients" onClick={onAddIngredients}>
                        🛒 Add Ingredients to Order
                    </button>
                    <button className="btn-close-text" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeModal;
