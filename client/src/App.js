import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import Profile from "./pages/Profile/Profile";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";
import About from "./pages/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Categories" element={<Category />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Productdetails" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
