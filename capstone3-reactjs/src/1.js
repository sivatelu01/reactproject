import { useState } from "react";

const FruiteSearch = () => {
  const fruites = ['apple', 'orange', 'mango','art','bananna','air'];
  const [searchquery, setSearchquery] = useState('');
  const [filteredFruites, setFilteredFruites] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase(); // Corrected toLowerCase
    setSearchquery(query);
    const filtered = fruites.filter((fruit) => // Changed variable name to "fruit"
      fruit.toLowerCase().includes(query)
    );
    setFilteredFruites(filtered);
  };

  return (
    <div>
      <h2>React Hooks</h2>
      <input type="text" placeholder="Search for fruits" value={searchquery} onChange={handleInputChange} />
      <ul>
        {
          filteredFruites.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default FruiteSearch;





