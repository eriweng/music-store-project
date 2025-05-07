import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search} from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = (
    <>
      <Link to="/music" className="">
      <span className="navLink hover: font-medium"> Music & Vinyl</span>
      </Link>
       <Link to="/events">
      <span className="navLink hover: font-medium"> Events</span>
      </Link>
      <a href="#" className="navLink hover: font-medium"> Merch</a>
      <a href="#" className="navLink hover: font-medium"> Contact</a>
      <a href="#" className="navLink hover: font-medium"> About Us</a>
    </>
  )

  return (
    <header className=" bg-black">
      <div id="header-wrapper" className="container"> 
        {/* Mobile Menu Icon */}
        {/* md（medium, 768px） */}
        <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen? <X size={20}/> : <Menu size={20}/>}
        </button>
        {/* Logo go here */}
       <Link to="/"> 
        <div id="header-brandLogo" className="">
          <img src="./assets/RanVin_wh.png" alt="brandLogo" />
        </div> 
        </Link>
        {/* Logo end */}
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-white" >
          {navLinks}
        </nav>
      </div>
      {/* search and cart icon */}
      <button className="mr-1"><Search size={24} className="text-white"/></button>
      <button><ShoppingCart size={24} className=" text-white"/></button>
      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <nav className="flex flex-col gap-4 mt-4 text-sm md:hidden">
          {navLinks}
        </nav>
      )}
    </header>
  )
}