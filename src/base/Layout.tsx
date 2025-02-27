import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/Whatsapp";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div
        className=" min-h-screen flex flex-col gap-8 justify-center items-center"
        style={{
          marginTop: "2rem",
        }}
      >
        {children}
      </div>
      <hr className="border border-white w-full" />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
