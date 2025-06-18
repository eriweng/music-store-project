import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  const footerLink = (
    <>
      <a href="#" className=" hover: font-medium">
        About
      </a>
      <a href="#" className=" hover: font-medium">
        Contact
      </a>
      <a href="#" className=" hover: font-medium">
        Terms & Conditions
      </a>
      <a href="#" className=" hover: font-medium">
        Privacy Policy
      </a>
    </>
  );

  return (
    <>
      <footer>
        <div
          id="footer-wrapper"
          className="footer container flex flex-col items-center mb-[18vh]  text-white bg-black"
        >
          <Link to="/">
            <img src="./assets/RanVin_wh.png" alt="" />
          </Link>
          <div className="inline-flex gap-4 my-4">
            <FaYoutube size={35} />
            <MdFacebook size={35} />
            <FaInstagram size={35} />
            <FaSpotify size={35} />
          </div>

          <div id="footerLink-wrapper" className="flex">
            {footerLink}
          </div>
          <hr className="w-full border-t-normal" />
          <div id="powerByRanvin">
            <span>
              Powered by &reg; <a href="#top">RANVIN</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
