import { Route, Routes } from "react-router-dom";
import Layout from "./base/Layout";
import HomePage from "./base/HomePage";
import MenuContainer from "./components/MenuPage";
import OurStory from "./base/OurStory";
import Gallery from "./base/Gallery";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/menu" element={<MenuContainer />} />
        <Route path="/menu/:category" element={<MenuContainer />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/gallery" element={<Gallery isHomePage={false} />} />
      </Routes>
    </Layout>
  );
};

export default App;
