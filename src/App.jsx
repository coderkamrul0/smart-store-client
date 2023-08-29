import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>SmartStore</title>
      </Helmet>
      <div className="">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
