import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./Components/Footer";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import Nabvar from "./Components/Nabvar";

const App = () => {
  return (
    <div>
      <Nabvar />
      <Home />
      <About />
      <Work />
      <Resume />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
