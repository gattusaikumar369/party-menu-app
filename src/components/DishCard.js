import React from 'react';


function DishCard({ dish, selected, toggleDish, openModal }) {
return (
<div className="dish-card">
<img src={dish.image} alt={dish.name} className="dish-img" />
<div className="dish-info">
<h4>{dish.name} {dish.isVeg ? "🥦" : "🍗"}</h4>
<p>{dish.description}</p>
<button className="ingredient-btn" onClick={() => openModal(dish)}>Ingredient</button>
{selected ? (
<button className="remove-btn" onClick={() => toggleDish(dish)}>Remove</button>
) : (
<button className="add-btn" onClick={() => toggleDish(dish)}>Add +</button>
)}
</div>
</div>
);
}


export default DishCard;