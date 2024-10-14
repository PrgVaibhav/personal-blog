import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import ScrollToTop from "../../website/ScrollToTop/ScrollToTop";
export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="h-full w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
