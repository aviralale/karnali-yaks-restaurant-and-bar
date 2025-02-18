import Layout from "./base/Layout";
import Logo from "../public/favicon.svg";

const App = () => {
  return (
    <Layout>
      <img src={Logo} width={200} alt="" />
      <h1 className="text-9xl font-bold">
        Karnali Yaks Restaurant <em>&</em> Bar
      </h1>
      <h1 className="text-5xl font-bold">Opening Soon...</h1>
    </Layout>
  );
};

export default App;
