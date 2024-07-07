import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Header from "./common/Header";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import { useRef } from "react";

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Router>
        <Header scrollToFooter={scrollToFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer ref={footerRef} />
      </Router>
    </div>
  );
}

export default App;
