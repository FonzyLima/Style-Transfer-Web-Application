import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./pages/Nav"
import Home from "./pages/Home.js"
import InputPage from './pages/InputPage';
import OutputPage from './pages/OutputPage';
function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Input" element={<InputPage />} />
        <Route path="/Output" element={<OutputPage />} />
      </Routes>
    </Router>
    
  );
}


export default App;
