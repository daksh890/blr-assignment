import React  from 'react';
import './App.css';

import HomePage from './HomePage';
function App() {
  // const res = await  axios.get('https://randomuser.me/api/?results=50');
  // console.log('res', res);

  return (
    <div className="App">
       <h1>Assignment</h1>
       <HomePage/>
    </div>
  );
}

export default App;
