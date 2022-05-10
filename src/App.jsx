import React from 'react';
import './App.css'
import { useState } from 'react';
import Student from './Components/Student/Student'

function App() {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className='App'>
      <input 
        type="text" 
        placeholder='Search ...' 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default App;
