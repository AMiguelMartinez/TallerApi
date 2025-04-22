import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Api from './Api'
import Api2 from './Api2'
import Api3 from './Api3'
import Nav from './Nav'
import './App.css'
import { useEffect } from 'react'

const App: React.FC = () => {
  
  useEffect(() => {
    console.log('Estamos usando useEffect');

  }, []);

return (
  <div>
      <Router>
        <Nav />
        <Routes>
           <Route path="/" element={<Api />} />
           <Route path="/api2" element={<Api2 />} />
           <Route path="/api3" element={<Api3 />} />
        </Routes>
    </Router>
  </div>
)
}

export default App
