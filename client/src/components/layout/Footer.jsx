import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  const footerLink = (
    <>
      <Link to="/music" className="hover: font-medium">
        About
      </Link>
      <Link to="/music" className="hover: font-medium">
        Contact
      </Link>
      <Link to="/music" className="hover: font-medium">
        Terms & Conditions
      </Link>
      <Link to="/music" className="hover: font-medium">
        Privacy Policy
      </Link>
    </>
  );

  return (
    <>
      <footer className="sm-container-space lg:lg-container-space">
        <div
          id="footer-wrapper"
          className="footer container flex flex-col items-center mb-[25vw] md:mb-0 text-white bg-black"
        >
          <Link to="/">
            <img src="./assets/RanVin_wh.png" alt="" />
          </Link>
          <div className="inline-flex gap-4 my-4">
            <a href="https://www.youtube.com/">
              <FaYoutube size={35} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <MdFacebook size={35} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={35} />
            </a>
            <a href="https://open.spotify.com/" target="_blank">
              <FaSpotify size={35} />
            </a>
          </div>

          <div id="footerLink-wrapper" className="flex">
            {footerLink}
          </div>
          <hr className="w-full border-t-normal" />
          <div id="powerByRanvin">
            <span>
              Powered by &reg; <Link to="/">RANVIN</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
