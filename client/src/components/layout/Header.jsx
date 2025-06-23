import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navLinks = (
    <>
      <Link to="/music" className="">
        <span className="navLink hover:font-semibold whitespace-nowrap">
          Music & Vinyl
        </span>
      </Link>
      <div>
        <hr className="lg:hidden border-t-normal" />
      </div>
      <Link to="/events">
        <span className="navLink hover:font-semibold whitespace-nowrap">
          Events
        </span>
      </Link>
      <div>
        <hr className="lg:hidden border-t-normal" />
      </div>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        Merch
      </a>
      <div>
        <hr className="lg:hidden border-t-normal" />
      </div>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        Contact
      </a>
      <div>
        <hr className="lg:hidden border-t-normal" />
      </div>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        About Us
      </a>
      <div>
        <hr className="lg:hidden border-t-normal" />
      </div>
    </>
  );

  return (
    <header className="relative mx-[15px]">
      <div className="container flex justify-between items-center">
        {/* Mobile Menu Icon */}
        {/* md（medium, 768px） */}

        {/* Logo go here */}
        <Link to="/">
          <div id="header-brandLogo" className="w-[150px]">
            <img src="./assets/RanVin_wh.png" alt="brandLogo" />
          </div>
        </Link>
        {/* Logo end */}
        <button
          className="lg:hidden ml-[-5px] text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-nowrap lg:ml-[4vw] gap-8 text-lg font-medium text-white">
          {navLinks}
        </nav>
        <div className="hidden w-full lg:flex gap-4 items-center justify-end">
          <form class="searchBar">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none"></div>
              <input
                type="text"
                id="default-search"
                class="block w-full h-9 rounded-lg text-sm text-white  bg-zinc-900 placeholder-gray-400 hover:border-2"
                placeholder="Search"
                required
              />
            </div>
          </form>
          {/* <button className="">
            <Search size={30} className="text-white" />
          </button> */}
          <button className="">
            <ShoppingCart size={30} className=" text-white" />
          </button>
        </div>
        {/* Mobile Dropdown Nav */}
        {isOpen && (
          <>
            <nav className="absolute top-10 left-0 z-50 flex flex-col w-full py-10 text-sm lg:hidden text-white bg-black">
              <div className="flex gap-4 items-center ml-auto">
                {/* <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                ><X className="size-[35px]" />
                </button> */}
                <button className="">
                  {isSearching ? null : (
                    <Search
                      size={30}
                      className="text-white"
                      onClick={() => setIsSearching(true)}
                    />
                  )}
                </button>
                {/* search label */}
                {isSearching && (
                  <>
                    <form class="searchBar w-auto mx-auto">
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none"></div>
                        <input
                          type="text"
                          id="default-search"
                          class="block w-full h-9 rounded-lg text-sm bg-zinc-900 placeholder-gray-400 hover:border-2"
                          placeholder="Search"
                          required
                        />
                      </div>
                    </form>
                  </>
                )}

                <button className="">
                  <ShoppingCart size={30} className=" text-white" />
                </button>
              </div>
              <div className="flex flex-col gap-5 mt-10">{navLinks}</div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
