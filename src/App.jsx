import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./Components/Footer";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
