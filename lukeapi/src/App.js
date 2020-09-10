import React, { useState } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router';
import Walker from './components/Walker';
import Planet from './components/Planet';

function App() {
  const [searchtype, setSearchtype] = useState("people");
  const [searchid, setSearchid] = useState("");
  

  const typechange = (e) => {
    setSearchtype(e.target.value);
  }

  const idchange = (e) => {
    setSearchid(e.target.value);
  }

  const navigateHandler =(e) => {
    console.log(searchtype);
    console.log(searchid);
    navigate(`/${searchtype}/${searchid}`);
  }

  return (
    <div className="App">
      <label>Search for:</label>
      <select onChange={typechange}>
        <option value="people">People</option>
        <option value="planet">Planet</option>
      </select>
      <label>ID:</label>
      <input type="number" min="1" step="1" onChange={idchange}/>
      <button onClick={navigateHandler}>Search</button>
      <Router>
        <Walker path="/people/:id" />
        <Planet path="/planet/:id" />
      </Router>
      
    </div>
  );
}

export default App;
