import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home</Link> &nbsp;
        <Link to="/about">About Us</Link> &nbsp;
        <Link to="/contact">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
