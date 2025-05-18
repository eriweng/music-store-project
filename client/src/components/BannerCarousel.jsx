import { initCarousels } from "flowbite";
import { useEffect} from "react"

export default function BannerCarousel() {
  useEffect(() => {
    initCarousels()
  },[])

  return (
    <>
      {/* <!-- Carousel wrapper --> */}
      <div 
      className="relative overflow-hidden w-full h-[330px] md:h-[480px] xl:h-[640px]"
      data-carousel="slide"
      data-carousel-interval="5000"
      >
        {/* <!-- Item 1 --> */}
        <div
          className="active w-full overflow-hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            key= "1"
            src="./assets/images/banners/banner-1.jpg"
            className="absolute block w-full max-h-[640px] object-cover"
            alt="banner-1"
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div
          className="hidden w-full overflow-hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            key="2"
            src="./assets/images/banners/banner-2.jpg"
            className="absolute block w-full max-h-[640px] object-cover"
            alt="banner-2"
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div
          className="hidden w-full overflow-hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            key="3"
            src="./assets/images/banners/banner-3.jpg"
            className="absolute block w-full max-h-[640px] object-cover"
            alt="banner-3"
          />
        </div>
        
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 hidden rounded-[1vw] bg-white/20 p-1 px-4 bottom-5 -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse xl:flex">
        {[...Array(3)].map((_, i) => {
          return (
          <>
          <button
            key={i}
            type="button"
            className="w-2 h-2 rounded-full hover:bg-white/100"
            // aria-current 告知目前顯示的幻燈片
            aria-current={i === 0 ? "true": "false"}
            // aria-label 提供語音輔助的描述
            aria-label={`Slide ${i+1}`}
            // data-carousel-slide-to 標記幻燈片索引，方便控制輪播
            data-carousel-slide-to={i}
          ></button>
          </>
        )})}
      </div>

      {/* <!-- Slider controls --> */}
      {/* bottom-0 234px-ok 384px-往下掉  */}
      <button
        type="button"
        className="absolute group left-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev="true"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/60  group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute group right-0 end-0 z-30 h-full flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/60 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      </div>
      
    </>
  );
}
