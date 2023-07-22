import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductItems from "./pages/ProductItems";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductItems />} />
        <Route path="/product" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
