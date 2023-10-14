import Index from '../src/Pages/index';
 import Login from '../src/Pages/login';
import SignUp from "../src/Pages/signUp";
import Support from "../src/Pages/support";
import Smartphones from "../src/Pages/smartPhone";
import NoPage from '../src/Pages/nopage.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Router>
    <Routes>
    <Route index={true} path="/" element={<Index/>} /> 
        
      <Route path="/support" element={<Support/>} />
      <Route path="/phones" element={<Smartphones/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
  </Router>
  );
  
    

  
}

export default App;
