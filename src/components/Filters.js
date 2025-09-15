import React from 'react';


function Filters({ search, setSearch, category, setCategory, vegOnly, setVegOnly, selectedCount }) {
const categories = ["All", "Starter", "Main Course", "Dessert", "Sides"];


return (
<div className="filters">
<input
type="text"
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search dish for your party..."
className="search-bar"
/>


<div className="category-tabs">
{categories.map((cat) => (
<button
key={cat}
className={`tab ${category === cat ? "active" : ""}`}
onClick={() => setCategory(cat)}
>
{cat}
</button>
))}
</div>


<div className="filter-row">
<label>
<input
type="checkbox"
checked={vegOnly}
onChange={(e) => setVegOnly(e.target.checked)}
/>
Veg Only
</label>
<span className="selected-count">Selected ({selectedCount})</span>
</div>
</div>
);
}


export default Filters;