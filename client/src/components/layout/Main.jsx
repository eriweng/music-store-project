import {Link} from "react-router-dom"
import BannerCarousel from "../BannerCarousel"
import CarouselTest from "../CarouselTest"

export default function Main () {

  return (
    <main className="main w-full my-6 mb-20 h-full xl:h-[640px] bg-black text-white">
          <BannerCarousel />
        </main>
  )
}