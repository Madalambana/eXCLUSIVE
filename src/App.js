import Index from "../src/Pages/index";
import Login from "../src/Pages/login";
import SignUp from "../src/Pages/signUp";
import Support from "../src/Pages/support";
import Smartphones from "../src/Pages/smartPhone";
import Reset from "./Pages/reset";
import NoPage from "../src/Pages/nopage";
import Selection from "../src/Pages/selection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index={true} path="/" element={<Index />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/select" element={<Selection />} />
        <Route path="/support" element={<Support />} />
        <Route path="/phones" element={<Smartphones />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
