import React from 'react';
import './App.css';
import Home from './components/Home';
import Title from './components/Title';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Insert from "./components/Insert";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Title />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/insert" element={<Insert />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
