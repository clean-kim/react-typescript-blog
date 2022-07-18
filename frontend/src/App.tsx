import React from 'react';
import './App.css';
import Home from './components/Home';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
        <div className="App-mlr13rem">
            <Home />
        </div>
    </div>
  );
}

export default App;
