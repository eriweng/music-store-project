import { Link } from "react-router-dom"

export default function Footer () {
  const footerLink = (
    <>
    <a href="#" className=" hover: font-medium">About</a>
    <a href="#" className=" hover: font-medium">Contact</a>
    <a href="#" className=" hover: font-medium">Terms & Conditions</a>
    <a href="#" className=" hover: font-medium">Privacy Policy</a>
    </>
  )

  return (
    <>
     <footer>
      <div id="footer-wrapper" className="footer container text-white bg-black">
        <Link to="/"><img src="./assets/RanVin_wh.png" alt="" /></Link>
        <div id="footerLink-wrapper" className="flex">
          {footerLink}
        </div>
      <hr />
      <div id="powerByRanvin">
        <span>Powered by &reg; <a href="#top">RANVIN</a></span>
      </div>
      </div>
     </footer>
    </>
  )
}