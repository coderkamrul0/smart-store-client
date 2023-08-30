import { Helmet } from "react-helmet";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
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
};

export default MainLayout;
