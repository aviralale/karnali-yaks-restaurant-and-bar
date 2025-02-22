import { Route, Routes } from "react-router-dom";
import Layout from "./base/Layout";
import HomePage from "./base/HomePage";
import MenuContainer from "./components/MenuPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuContainer />} />
      </Routes>
    </Layout>
  );
};

export default App;
