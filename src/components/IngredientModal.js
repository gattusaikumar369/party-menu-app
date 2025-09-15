import React from 'react';


function IngredientModal({ dish, close }) {
return (
<div className="modal-overlay">
<div className="modal">
<h3>{dish.name} - Ingredients</h3>
<ul>
{dish.ingredients.map((ing, i) => (
<li key={i}>{ing}</li>
))}
</ul>
<button onClick={close}>Close</button>
</div>
</div>
);
}


export default IngredientModal;