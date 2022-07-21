import React from 'react';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import {Route, Routes} from "react-router-dom";
import Insert from "./components/Insert";
import Detail from "./components/Detail";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/detail" element={<Detail />} />
          </Route>
      </Routes>
  );
}

export default App;
