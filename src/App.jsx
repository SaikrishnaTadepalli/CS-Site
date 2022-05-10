import React from 'react';
import './App.css'
import { useState } from 'react';
import DATA from './data.json';
import Student from './Components/Student/Student'

function App() {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className='App'>
      <h1>University of Waterloo</h1>
      <h2>Math Student Profiles</h2>

      <input 
        type="text" 
        placeholder='Search ...' 
        onChange={handleSearch} 
      />

      {
        DATA.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.firstName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val) => {
          return (
            <Student
              id={val.id}
              firstName={val.firstName}
              lastName={val.lastName}
              studentNum={val.studentNum}
              program={val.program}
              term={val.term}
              link={val.link}
            />
          )
        })
      }
    </div>
  );
}

export default App;
