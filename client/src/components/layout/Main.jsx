import { Link } from "react-router-dom";
import BannerCarousel from "../BannerCarousel";

export default function Main() {
  return (
    // carousel container
    <main className="main sm-container-space lg:lg-container-space xl:h-[640px] bg-black text-white">
      <BannerCarousel />
    </main>
  );
}
