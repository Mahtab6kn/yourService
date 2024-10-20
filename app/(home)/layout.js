import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layoutHome = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layoutHome;
