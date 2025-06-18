import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = (
    <>
      <Link to="/music" className="">
        <span className="navLink hover:font-semibold whitespace-nowrap">
          
          Music & Vinyl
        </span>
      </Link>
      <Link to="/events">
        <span className="navLink hover:font-semibold whitespace-nowrap">
          {" "}
          Events
        </span>
      </Link>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        {" "}
        Merch
      </a>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        {" "}
        Contact
      </a>
      <a href="#" className="navLink hover:font-semibold whitespace-nowrap">
        {" "}
        About Us
      </a>
    </>
  );

  return (
    <header className="container flex justify-between items-center">
      {/* <div id="header-wrapper"> */}
      {/* Mobile Menu Icon */}
      {/* md（medium, 768px） */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={35} /> : <Menu size={35} />}
      </button>
      {/* Logo go here */}

      <Link to="/">
        <div id="header-brandLogo" className="mr-auto">
          <img src="./assets/RanVin_wh.png" alt="brandLogo" />
        </div>
      </Link>
      {/* Logo end */}
      {/* </div> */}
      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-nowrap md:gap-10 lg:gap-20 mx-5 lg:ml-10 text-lg font-medium text-white">
        {navLinks}
      </nav>
      {/* search and cart icon */}
      <div className="flex gap-2 items-center">
        <button className="mr-1 ">
          <Search size={30} className="text-white" />
        </button>
        <button className="">
          <ShoppingCart size={30} className=" text-white" />
        </button>
      </div>
      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <nav className="flex flex-col gap-4 mt-4 text-sm md:hidden text-white">
          {navLinks}
        </nav>
      )}
    </header>
  );
}
