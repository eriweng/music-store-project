import { Link } from "react-router-dom";
import BannerCarousel from "../BannerCarousel";

export default function Main() {
  return (
    // carousel container
    <main className="main w-full mt-6 h-full xl:h-[640px] bg-black text-white">
      <BannerCarousel />
    </main>
  );
}
