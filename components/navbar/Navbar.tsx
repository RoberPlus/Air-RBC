import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8 px-4 md:px-8">
        <div className="flex items-center justify-between space-x-3 ">
          <Logo />
          <div className="flex md:hidden space-x-3">
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>

        <div>
          <Suspense fallback="Loading...">
            <NavSearch />
          </Suspense>
        </div>

        <div className=" gap-4 items-center hidden md:flex ">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
