import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  const footerLink = (
    <div className="grid grid-cols-3 gap-y-2 place-items-center my-5 text-[18px] font-light overflow-hidden transition-all md:flex md:gap-5 md:my-0">
      <Link to="/music" className="mr-auto text-nowrap hover:font-normal">
        About
      </Link>
      <Link to="/music" className="text-nowrap hover:font-normal">
        Contact
      </Link>
      <Link to="/music" className="ml-auto text-nowrap hover:font-normal">
        Privacy
      </Link>
      <Link to="/music" className="mr-auto hover:font-normal">
        Terms & Conditions
      </Link>
      <Link to="/music" className="text-nowrap hover:font-normal">
        Policy
      </Link>
    </div>
  );

  return (
    <>
      <footer className="sm-container-space lg:lg-container-space">
        <div
          id="footer-wrapper"
          className="footer container flex flex-col items-center mt-20 mb-[20vw] md:mb-0 text-white bg-black"
        >
          <div className="md:flex md:flex-row md:items-center md:w-full md:justify-between">
            <Link to="/">
              <img src="/assets/RanVin_wh.png" alt="" />
            </Link>
            {/* social media links */}
            <div className="inline-flex gap-4 my-4">
              <a href="https://www.youtube.com/" target="_blank">
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
          </div>

          <div id="footerLink-wrapper" className="flex">
            {footerLink}
          </div>
          <hr className="w-full border-t-normal" />
          <div id="powerByRanvin" className="my-5">
            <span>
              Powered by &reg; <Link to="/">RANVIN</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
