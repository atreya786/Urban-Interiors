import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
