import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header
      className="w-full md:w-10/12 m-auto rounded-md mt-2 p-4"
      aria-label=""
    >
      <nav className="flex justify-between items-center">
        <div className="logo text-xl md:text-3xl">
          <Link to={"/"}>VaibhavWrites.</Link>
        </div>

        <div className="visit-my-portfolio">
          <a
            href="https://kumarvaibhav.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border border-gray-500 p-1 rounded-lg btn"
          >
            Portfolio <GoArrowUpRight className="" />
          </a>
        </div>
      </nav>
    </header>
  );
};
