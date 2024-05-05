import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
            <Navbar />
            <Main />
        </div>
    </div>
  );
}

export default App;
