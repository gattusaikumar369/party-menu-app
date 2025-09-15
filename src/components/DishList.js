import React from 'react';
import DishCard from './DishCard';


function DishList({ dishes, selectedDishes, toggleDish, openModal }) {
return (
<div className="dish-list">
{dishes.map((dish) => (
<DishCard
key={dish.id}
dish={dish}
selected={!!selectedDishes.find((d) => d.id === dish.id)}
toggleDish={toggleDish}
openModal={openModal}
/>
))}
</div>
);
}


export default DishList;