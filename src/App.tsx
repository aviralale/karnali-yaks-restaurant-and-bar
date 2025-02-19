import { Route, Routes } from "react-router-dom";
import Layout from "./base/Layout";
import HomePage from "./base/HomePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
