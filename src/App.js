import React, { useState } from 'react';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import {dishesData} from './data/mockDishes';
import './App.css';


function App() {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [vegOnly, setVegOnly] = useState(false);
const [selectedDishes, setSelectedDishes] = useState([]);
const [modalDish, setModalDish] = useState(null);


const toggleDish = (dish) => {
setSelectedDishes((prev) => {
if (prev.find((d) => d.id === dish.id)) {
return prev.filter((d) => d.id !== dish.id);
} else {
return [...prev, dish];
}
});
};


const filteredDishes = dishesData.filter((dish) => {
const matchCategory = category === "All" || dish.category === category;
const matchSearch = dish.name.toLowerCase().includes(search.toLowerCase());
const matchVeg = !vegOnly || dish.isVeg;
return matchCategory && matchSearch && matchVeg;
});


return (
<div className="app">
<Filters
search={search}
setSearch={setSearch}
category={category}
setCategory={setCategory}
vegOnly={vegOnly}
setVegOnly={setVegOnly}
selectedCount={selectedDishes.length}
/>


<DishList
dishes={filteredDishes}
selectedDishes={selectedDishes}
toggleDish={toggleDish}
openModal={setModalDish}
/>


<div className="footer">
<p>Total Dishes Selected: {selectedDishes.length}</p>
<button className="continue-btn">Continue</button>
</div>


{modalDish && (
<IngredientModal dish={modalDish} close={() => setModalDish(null)} />
)}
</div>
);
}


export default App;
