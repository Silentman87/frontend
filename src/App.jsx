import React from 'react';
import Navbar  from './component/Navbar';
import './App.css'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';



function App() {
 

  return (
       
       <Router>
         <Routes>

          <Route path='/' element={<Navbar />} />
 
       </Routes>
       
       
       </Router>
        
  )
}

export default App;
