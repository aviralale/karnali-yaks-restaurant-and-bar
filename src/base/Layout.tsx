import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
